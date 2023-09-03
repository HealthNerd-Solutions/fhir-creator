import React from "react";

import Mark from "./Mark";
import {
  selectionIsEmpty,
  selectionIsBackwards,
  splitWithOffsets,
} from "./utils";
import { Span } from "./span";

const Split = (props) => {
  if (props.mark) return <Mark {...props} />;

  return (
    <span
      data-start={props.start}
      data-end={props.end}
      onClick={() => props.onClick({ start: props.start, end: props.end })}
    >
      {props.content}
    </span>
  );
};

interface TextSpan extends Span {
  text: string;
}

type TextBaseProps<T> = {
  content: string;
  value: T[];
  onChange: (value: T[]) => any;
  getSpan?: (span: TextSpan) => T;
  // TODO: determine whether to overwrite or leave intersecting ranges.
};

type TextAnnotatorProps<T> = React.HTMLAttributes<HTMLDivElement> &
  TextBaseProps<T>;

export const TextAnnotator = <T extends Span>(props: TextAnnotatorProps<T>) => {
  const getSpan = (span: TextSpan): T => {
    // TODO: Better typings here.
    if (props.getSpan) return props.getSpan(span) as T;
    return { start: span.start, end: span.end } as T;
  };

  const handleMouseUp = () => {
    if (!props.onChange) return;

    const selection = window.getSelection();

    if (!selection || selectionIsEmpty(selection)) return;

    const anchorParent = selection.anchorNode?.parentElement;
    const focusParent = selection.focusNode?.parentElement;

    const anchorDataStart = anchorParent?.getAttribute("data-start");
    const focusDataStart = focusParent?.getAttribute("data-start");

    if (anchorParent && focusParent && anchorDataStart && focusDataStart) {
      let start = parseInt(anchorDataStart, 10) + (selection.anchorOffset || 0);
      let end = parseInt(focusDataStart, 10) + (selection.focusOffset || 0);

      if (selectionIsBackwards(selection)) {
        [start, end] = [end, start];
      }

      props.onChange([
        ...props.value,
        getSpan({ start, end, text: content.slice(start, end) }),
      ]);

      window.getSelection()?.empty(); // Use null-conditional operator to avoid the need for non-null assertion
    }
  };

  // const handleMouseUp = () => {
  //   if (!props.onChange) return

  //   const selection = window.getSelection()

  //   if (!selection || selectionIsEmpty(selection)) return

  //   let start =
  //     parseInt(selection.anchorNode.parentElement.getAttribute('data-start'), 10) +
  //     selection.anchorOffset
  //   let end =
  //     parseInt(selection.focusNode.parentElement.getAttribute('data-start'), 10) +
  //     selection.focusOffset

  //   if (selectionIsBackwards(selection)) {
  //     ;[start, end] = [end, start]
  //   }

  //   props.onChange([...props.value, getSpan({start, end, text: content.slice(start, end)})])

  //   window.getSelection()!.empty()
  // }

  const handleSplitClick = ({ start, end }: { start: number; end: number }) => {
    // Find and remove the matching split.
    const splitIndex = props.value.findIndex(
      (s) => s.start === start && s.end === end
    );
    if (splitIndex >= 0) {
      props.onChange([
        ...props.value.slice(0, splitIndex),
        ...props.value.slice(splitIndex + 1),
      ]);
    }
  };

  const { content, value, style } = props;
  const splits = splitWithOffsets(content, value);
  return (
    <div style={style} onMouseUp={handleMouseUp}>
      {splits.map((split) => (
        <Split
          key={`${split.start}-${split.end}`}
          {...split}
          onClick={handleSplitClick}
        />
      ))}
    </div>
  );
};

export default TextAnnotator;