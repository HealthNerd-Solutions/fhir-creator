import { usePathCounter } from "@/hooks/usePathCounter";
import { ProfileTree, ProfileTreeNode } from "@/utils/buildTree";
import {
  extractIndex,
  getDisplayPath,
  getPathSuffix,
  incrementDataPath,
} from "@/utils/path_utils";
import { tooltipStyles } from "@/utils/styles";
import {
  deleteBranch,
  duplicateBranch,
  getLastDescendant,
  insertAfterNode,
} from "@/utils/tree_utils";
import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePieChart,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import PrimitveInput from "./PrimitveInput";
import IntermediateParent from "./IntermediateParent";

interface RootParentProps {
  node: ProfileTreeNode;
  isExpanded: boolean;
  toggleNodeExpansion: (nodePath: string) => void;
  setProfileTree: React.Dispatch<React.SetStateAction<ProfileTree>>;
  pathsWithInvalidCardinality: string[];
  profileTree: ProfileTree;
}

const RootParent = (props: RootParentProps) => {
  const {
    decrementPathCounter,
    incrementPathCounter,
    evaluateRenderAddButton,
  } = usePathCounter();

  const renderNode = (node: ProfileTreeNode) => {
    if (node.isPrimitive) {
      return (
        <PrimitveInput
          key={node.dataPath}
          node={node}
          profileTreeNode={node}
          setProfileTree={props.setProfileTree}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
        />
      );
    } else {
      return (
        <IntermediateParent
          key={props.node.dataPath}
          isExpanded={props.isExpanded}
          node={props.node}
          pathsWithInvalidCardinality={props.pathsWithInvalidCardinality}
          profileTree={props.profileTree}
          setProfileTree={props.setProfileTree}
          toggleNodeExpansion={props.toggleNodeExpansion}
        />
      );
    }
  };

  return (
    <div
      className={`w-full h-full rounded-md border-gray-200 ${
        props.node.element.sliceName ? "border-violet-400" : ""
      } ${
        props.pathsWithInvalidCardinality.includes(props.node.dataPath)
          ? "border-red-600 border-1"
          : ""
      }
    `}
      key={props.node.dataPath}
    >
      <div className="flex flex-row h-full">
        <div className="flex bg-gray-100 p-1 text-xs rounded-md hover:bg-gray-200 transition-colors duration-300 ease-in-out cursor-pointer">
          <button
            className="flex flex-row items-center h-full"
            onClick={() => props.toggleNodeExpansion(props.node.dataPath)}
          >
            {props.isExpanded ? (
              <MdExpandLess size={24} />
            ) : (
              <MdExpandMore size={24} />
            )}
          </button>
        </div>
        <div className="flex flex-col pl-2 w-full">
          <div className="flex flex-row items-center">
            <h2
              className={`font-light text-md ${
                props.node.element.min! > 0
                  ? "after:text-red-600 after:content-['*']"
                  : ""
              }`}
            >
              {getDisplayPath(props.node)}
            </h2>
            <span className="flex-grow" />
            <div className="flex flex-row items-center gap-2">
              {props.node.element.sliceName && (
                <AiOutlinePieChart style={{ color: "" }} />
              )}
              {props.node.element.type ||
              props.node.element.type!.length <= 1 ? null : (
                <select
                  id="element-type"
                  placeholder="Type"
                  className="bg-white py-0.5 px-4 w-40 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={props.node.type}
                  onChange={(e) => {
                    const newProfileTree = [...props.profileTree];
                    const nodeIndex = newProfileTree.findIndex(
                      (n) => n.dataPath === props.node.dataPath
                    );
                    (newProfileTree[nodeIndex].type = e.target.value),
                      props.setProfileTree(newProfileTree);
                  }}
                >
                  {props.node.element.type ? (
                    (props.node.element.type as any[]).map((type) => (
                      <option value={type.code} key={type.code}>
                        {type.code}
                      </option>
                    ))
                  ) : (
                    <option value="string">string</option>
                  )}
                </select>
              )}
              {
                // help tooltip that displays the description of the element
                props.node.element.short && (
                  <>
                    <div
                      data-tooltip-id={props.node.dataPath}
                      data-tooltip-content={props.node.element.short}
                    >
                      <AiOutlineQuestionCircle />
                    </div>
                    <Tooltip
                      id={props.node.dataPath}
                      place="right"
                      style={tooltipStyles}
                    />
                  </>
                )
              }
              {extractIndex(getPathSuffix(props.node.dataPath)) > 0 ? (
                <button
                  onClick={() => {
                    let newProfileTree = [...props.profileTree];
                    newProfileTree = deleteBranch(newProfileTree, props.node);
                    props.setProfileTree(newProfileTree);
                    // decrement pathCounter
                    decrementPathCounter(props.node.dataPath);
                  }}
                >
                  <AiOutlineMinus size={20} />
                </button>
              ) : null}
              {evaluateRenderAddButton(
                props.node.element,
                props.node.dataPath
              ) ? (
                <button
                  onClick={() => {
                    const newNode = structuredClone(props.node);
                    newNode.value = "";
                    newNode.dataPath = incrementDataPath(
                      props.profileTree,
                      props.node
                    );
                    const lastDescendant = getLastDescendant(
                      props.profileTree,
                      props.node
                    );
                    let newProfileTree = [...props.profileTree];
                    // TODO does not work yet in the UI
                    newProfileTree = insertAfterNode(
                      newProfileTree,
                      lastDescendant,
                      newNode
                    );
                    newProfileTree = duplicateBranch(newProfileTree, newNode);
                    props.setProfileTree(newProfileTree);
                    // increment pathCounter
                    incrementPathCounter(props.node.dataPath);
                  }}
                >
                  <GrFormAdd size={20} />
                </button>
              ) : null}
            </div>
          </div>
          {props.isExpanded && (
            <div className="flex flex-row flex-wrap gap-1 pl-8">
              {props.node.childPaths.map((childPath: string) => {
                let childNode = props.profileTree.find(
                  (n: ProfileTreeNode) => n.dataPath === childPath
                );
                if (props.node.type) {
                  // multiype node with select input for type selection
                  // the following code filters the child nodes to only show the ones that match the selected type
                  childNode = childNode?.dataPath
                    .toLowerCase()
                    .includes(props.node.type.toLowerCase())
                    ? childNode
                    : undefined;
                }
                return childNode && renderNode(childNode);
              })}
            </div>
          )}
        </div>
      </div>
      <hr className="my-1" />
    </div>
  );
};

export default RootParent;