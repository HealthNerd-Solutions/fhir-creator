const data = [
  {
    element: {
      id: "ImmunizationRecommendation.id",
      path: "ImmunizationRecommendation.id",
      short: "Logical id of this artifact",
      definition:
        "The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.",
      comment:
        "The only time that a resource does not have an id is when it is being submitted to the server using a create operation.",
      min: 0,
      max: "1",
      base: { path: "Resource.id", min: 0, max: "1" },
      type: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
              valueUrl: "id",
            },
          ],
          code: "http://hl7.org/fhirpath/System.String",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.id",
    parentDataPath: "root",
    basePath: "root.id",
    baseId: "ImmunizationRecommendation.id",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.meta",
      path: "ImmunizationRecommendation.meta",
      short: "Metadata about the resource",
      definition:
        "The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
      min: 0,
      max: "1",
      base: { path: "Resource.meta", min: 0, max: "1" },
      type: [{ code: "Meta" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.meta",
    parentDataPath: "root",
    basePath: "root.meta",
    baseId: "ImmunizationRecommendation.meta",
    isPrimitive: false,
    childPaths: [
      "root.meta.versionId",
      "root.meta.lastUpdated",
      "root.meta.source",
      "root.meta.profile[0]",
      "root.meta.security[0]",
      "root.meta.tag[0]",
    ],
    value: "",
  },
  {
    element: {
      id: "Meta.versionId",
      path: "Meta.versionId",
      short: "Version specific identifier",
      definition:
        "The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted.",
      comment:
        "The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.",
      min: 0,
      max: "1",
      base: { path: "Meta.versionId", min: 0, max: "1" },
      type: [{ code: "id" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.meta.versionId",
    parentDataPath: "root.meta",
    basePath: "root.meta.versionId",
    baseId: "Meta.versionId",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Meta.lastUpdated",
      path: "Meta.lastUpdated",
      short: "When the resource version last changed",
      definition:
        "When the resource last changed - e.g. when the version changed.",
      comment:
        "This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last-Modified and SHOULD have the same value on a [read](http.html#read) interaction.",
      min: 0,
      max: "1",
      base: { path: "Meta.lastUpdated", min: 0, max: "1" },
      type: [{ code: "instant" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.meta.lastUpdated",
    parentDataPath: "root.meta",
    basePath: "root.meta.lastUpdated",
    baseId: "Meta.lastUpdated",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Meta.source",
      path: "Meta.source",
      short: "Identifies where the resource comes from",
      definition:
        "A uri that identifies the source system of the resource. This provides a minimal amount of [Provenance](provenance.html#) information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc.",
      comment:
        "In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated source is allowed; for additional provenance details, a full Provenance resource should be used.  This element can be used to indicate where the current master source of a resource that has a canonical URL if the resource is no longer hosted at the canonical URL.",
      min: 0,
      max: "1",
      base: { path: "Meta.source", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.meta.source",
    parentDataPath: "root.meta",
    basePath: "root.meta.source",
    baseId: "Meta.source",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Meta.profile",
      path: "Meta.profile",
      short: "Profiles this resource claims to conform to",
      definition:
        "A list of profiles (references to [StructureDefinition](structuredefinition.html#) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](structuredefinition-definitions.html#StructureDefinition.url).",
      comment:
        "It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.",
      min: 0,
      max: "*",
      base: { path: "Meta.profile", min: 0, max: "*" },
      type: [
        {
          code: "canonical",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
          ],
        },
      ],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
    },
    dataPath: "root.meta.profile[0]",
    parentDataPath: "root.meta",
    basePath: "root.meta.profile",
    baseId: "Meta.profile",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Meta.security",
      path: "Meta.security",
      short: "Security Labels applied to this resource",
      definition:
        "Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.",
      comment:
        "The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.",
      min: 0,
      max: "*",
      base: { path: "Meta.security", min: 0, max: "*" },
      type: [{ code: "Coding" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Security Labels from the Healthcare Privacy and Security Classification System.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "SecurityLabels",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/security-labels",
      },
    },
    dataPath: "root.meta.security[0]",
    parentDataPath: "root.meta",
    basePath: "root.meta.security",
    baseId: "Meta.security",
    isPrimitive: false,
    childPaths: [
      "root.meta.security[0].system",
      "root.meta.security[0].version",
      "root.meta.security[0].code",
      "root.meta.security[0].display",
      "root.meta.security[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.meta.security[0].system",
    parentDataPath: "root.meta.security[0]",
    basePath: "root.meta.security.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.meta.security[0].version",
    parentDataPath: "root.meta.security[0]",
    basePath: "root.meta.security.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.meta.security[0].code",
    parentDataPath: "root.meta.security[0]",
    basePath: "root.meta.security.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.meta.security[0].display",
    parentDataPath: "root.meta.security[0]",
    basePath: "root.meta.security.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
      type: [{ code: "boolean" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.meta.security[0].userSelected",
    parentDataPath: "root.meta.security[0]",
    basePath: "root.meta.security.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Meta.tag",
      path: "Meta.tag",
      short: "Tags applied to this resource",
      definition:
        "Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.",
      comment:
        "The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.",
      min: 0,
      max: "*",
      base: { path: "Meta.tag", min: 0, max: "*" },
      type: [{ code: "Coding" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              'Codes that represent various types of tags, commonly workflow-related; e.g. "Needs review by Dr. Jones".',
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "Tags",
          },
        ],
        strength: "example",
        valueSet: "http://hl7.org/fhir/ValueSet/common-tags",
      },
    },
    dataPath: "root.meta.tag[0]",
    parentDataPath: "root.meta",
    basePath: "root.meta.tag",
    baseId: "Meta.tag",
    isPrimitive: false,
    childPaths: [
      "root.meta.tag[0].system",
      "root.meta.tag[0].version",
      "root.meta.tag[0].code",
      "root.meta.tag[0].display",
      "root.meta.tag[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.meta.tag[0].system",
    parentDataPath: "root.meta.tag[0]",
    basePath: "root.meta.tag.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.meta.tag[0].version",
    parentDataPath: "root.meta.tag[0]",
    basePath: "root.meta.tag.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.meta.tag[0].code",
    parentDataPath: "root.meta.tag[0]",
    basePath: "root.meta.tag.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.meta.tag[0].display",
    parentDataPath: "root.meta.tag[0]",
    basePath: "root.meta.tag.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
      type: [{ code: "boolean" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.meta.tag[0].userSelected",
    parentDataPath: "root.meta.tag[0]",
    basePath: "root.meta.tag.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.implicitRules",
      path: "ImmunizationRecommendation.implicitRules",
      short: "A set of rules under which this content was created",
      definition:
        "A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.",
      comment:
        "Asserting this rule set restricts the content to be only understood by a limited set of trading partners. This inherently limits the usefulness of the data in the long term. However, the existing health eco-system is highly fractured, and not yet ready to define, collect, and exchange data in a generally computable sense. Wherever possible, implementers and/or specification writers should avoid using this element. Often, when used, the URL is a reference to an implementation guide that defines these special rules as part of it's narrative along with other profiles, value sets, etc.",
      min: 0,
      max: "1",
      base: { path: "Resource.implicitRules", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: true,
      isModifierReason:
        "This element is labeled as a modifier because the implicit rules may provide additional knowledge about the resource that modifies it's meaning or interpretation",
      isSummary: true,
    },
    dataPath: "root.implicitRules",
    parentDataPath: "root",
    basePath: "root.implicitRules",
    baseId: "ImmunizationRecommendation.implicitRules",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.language",
      path: "ImmunizationRecommendation.language",
      short: "Language of the resource content",
      definition: "The base language in which the resource is written.",
      comment:
        "Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource. Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).",
      min: 0,
      max: "1",
      base: { path: "Resource.language", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet",
            valueCanonical: "http://hl7.org/fhir/ValueSet/all-languages",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "Language",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "preferred",
        description: "IETF language tag",
        valueSet: "http://hl7.org/fhir/ValueSet/languages",
      },
    },
    dataPath: "root.language",
    parentDataPath: "root",
    basePath: "root.language",
    baseId: "ImmunizationRecommendation.language",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.text",
      path: "ImmunizationRecommendation.text",
      short: "Text summary of the resource, for human interpretation",
      definition:
        'A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.',
      comment:
        'Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.',
      alias: ["narrative", "html", "xhtml", "display"],
      min: 0,
      max: "1",
      base: { path: "DomainResource.text", min: 0, max: "1" },
      type: [{ code: "Narrative" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [{ identity: "rim", map: "Act.text?" }],
    },
    dataPath: "root.text",
    parentDataPath: "root",
    basePath: "root.text",
    baseId: "ImmunizationRecommendation.text",
    isPrimitive: false,
    childPaths: ["root.text.status", "root.text.div"],
    value: "",
  },
  {
    element: {
      id: "Narrative.status",
      path: "Narrative.status",
      short: "generated | extensions | additional | empty",
      definition:
        "The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.",
      min: 1,
      max: "1",
      base: { path: "Narrative.status", min: 1, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString: "The status of a resource narrative.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "NarrativeStatus",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/narrative-status|4.3.0",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.text.status",
    parentDataPath: "root.text",
    basePath: "root.text.status",
    baseId: "Narrative.status",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Narrative.div",
      path: "Narrative.div",
      short: "Limited xhtml content",
      definition:
        "The actual narrative content, a stripped down version of XHTML.",
      comment:
        "The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.",
      min: 1,
      max: "1",
      base: { path: "Narrative.div", min: 1, max: "1" },
      type: [{ code: "xhtml" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
        {
          key: "txt-1",
          severity: "error",
          human:
            "The narrative SHALL contain only the basic html formatting elements and attributes described in chapters 7-11 (except section 4 of chapter 9) and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained style attributes",
          expression: "htmlChecks()",
          xpath:
            "not(descendant-or-self::*[not(local-name(.)=('a', 'abbr', 'acronym', 'b', 'big', 'blockquote', 'br', 'caption', 'cite', 'code', 'col', 'colgroup', 'dd', 'dfn', 'div', 'dl', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'i', 'img', 'li', 'ol', 'p', 'pre', 'q', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'tt', 'ul', 'var'))]) and not(descendant-or-self::*/@*[not(name(.)=('abbr', 'accesskey', 'align', 'alt', 'axis', 'bgcolor', 'border', 'cellhalign', 'cellpadding', 'cellspacing', 'cellvalign', 'char', 'charoff', 'charset', 'cite', 'class', 'colspan', 'compact', 'coords', 'dir', 'frame', 'headers', 'height', 'href', 'hreflang', 'hspace', 'id', 'lang', 'longdesc', 'name', 'nowrap', 'rel', 'rev', 'rowspan', 'rules', 'scope', 'shape', 'span', 'src', 'start', 'style', 'summary', 'tabindex', 'title', 'type', 'valign', 'value', 'vspace', 'width'))])",
          source: "http://hl7.org/fhir/StructureDefinition/Narrative",
        },
        {
          key: "txt-2",
          severity: "error",
          human: "The narrative SHALL have some non-whitespace content",
          expression: "htmlChecks()",
          xpath:
            "descendant::text()[normalize-space(.)!=''] or descendant::h:img[@src]",
          source: "http://hl7.org/fhir/StructureDefinition/Narrative",
        },
      ],
      isModifier: false,
      isSummary: false,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.text.div",
    parentDataPath: "root.text",
    basePath: "root.text.div",
    baseId: "Narrative.div",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.contained",
      path: "ImmunizationRecommendation.contained",
      short: "Contained, inline Resources",
      definition:
        "These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.",
      comment:
        "This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again. Contained resources may have profiles and tags In their meta elements, but SHALL NOT have security labels.",
      alias: ["inline resources", "anonymous resources", "contained resources"],
      min: 0,
      max: "*",
      base: { path: "DomainResource.contained", min: 0, max: "*" },
      type: [{ code: "Resource" }],
      constraint: [
        {
          key: "dom-r4b",
          severity: "warning",
          human:
            "Containing new R4B resources within R4 resources may cause interoperability issues if instances are shared with R4 systems",
          expression:
            "($this is Citation or $this is Evidence or $this is EvidenceReport or $this is EvidenceVariable or $this is MedicinalProductDefinition or $this is PackagedProductDefinition or $this is AdministrableProductDefinition or $this is Ingredient or $this is ClinicalUseDefinition or $this is RegulatedAuthorization or $this is SubstanceDefinition or $this is SubscriptionStatus or $this is SubscriptionTopic) implies (%resource is Citation or %resource is Evidence or %resource is EvidenceReport or %resource is EvidenceVariable or %resource is MedicinalProductDefinition or %resource is PackagedProductDefinition or %resource is AdministrableProductDefinition or %resource is Ingredient or %resource is ClinicalUseDefinition or %resource is RegulatedAuthorization or %resource is SubstanceDefinition or %resource is SubscriptionStatus or %resource is SubscriptionTopic)",
          xpath:
            "not(f:Citation|f:Evidence|f:EvidenceReport|f:EvidenceVariable|f:MedicinalProductDefinition|f:PackagedProductDefinition|f:AdministrableProductDefinition|f:Ingredient|f:ClinicalUseDefinition|f:RegulatedAuthorization|f:SubstanceDefinition|f:SubscriptionStatus|f:SubscriptionTopic) or not(parent::f:Citation|parent::f:Evidence|parent::f:EvidenceReport|parent::f:EvidenceVariable|parent::f:MedicinalProductDefinition|parent::f:PackagedProductDefinition|parent::f:AdministrableProductDefinition|parent::f:Ingredient|parent::f:ClinicalUseDefinition|parent::f:RegulatedAuthorization|parent::f:SubstanceDefinition|f:SubscriptionStatus|f:SubscriptionTopic)",
          source:
            "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.contained[0]",
    parentDataPath: "root",
    basePath: "root.contained",
    baseId: "ImmunizationRecommendation.contained",
    isPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.modifierExtension",
      path: "ImmunizationRecommendation.modifierExtension",
      short: "Extensions that cannot be ignored",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content"],
      min: 0,
      max: "*",
      base: { path: "DomainResource.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
        {
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      mustSupport: false,
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the resource that contains them",
      isSummary: false,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.modifierExtension[0]",
    parentDataPath: "root",
    basePath: "root.modifierExtension",
    baseId: "ImmunizationRecommendation.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.identifier",
      path: "ImmunizationRecommendation.identifier",
      short: "Business identifier",
      definition:
        "A unique identifier assigned to this particular recommendation record.",
      min: 0,
      max: "*",
      base: { path: "ImmunizationRecommendation.identifier", min: 0, max: "*" },
      type: [{ code: "Identifier" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Request.identifier" },
        { identity: "w5", map: "FiveWs.identifier" },
        { identity: "rim", map: ".id" },
      ],
    },
    dataPath: "root.identifier[0]",
    parentDataPath: "root",
    basePath: "root.identifier",
    baseId: "ImmunizationRecommendation.identifier",
    isPrimitive: false,
    childPaths: [
      "root.identifier[0].use",
      "root.identifier[0].type",
      "root.identifier[0].system",
      "root.identifier[0].value",
      "root.identifier[0].period",
      "root.identifier[0].assigner",
    ],
    value: "",
  },
  {
    element: {
      id: "Identifier.use",
      path: "Identifier.use",
      short: "usual | official | temp | secondary | old (If known)",
      definition: "The purpose of this identifier.",
      comment:
        "Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.",
      requirements:
        "Allows the appropriate identifier for a particular context of use to be selected from among a set of identifiers.",
      min: 0,
      max: "1",
      base: { path: "Identifier.use", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: true,
      isModifierReason:
        'This is labeled as "Is Modifier" because applications should not mistake a temporary id for a permanent one.',
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Identifies the purpose for this identifier, if known .",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "IdentifierUse",
          },
        ],
        strength: "required",
        valueSet: "http://hl7.org/fhir/ValueSet/identifier-use|4.3.0",
      },
      mapping: [
        { identity: "v2", map: "N/A" },
        { identity: "rim", map: "Role.code or implied by context" },
      ],
    },
    dataPath: "root.identifier[0].use",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.use",
    baseId: "Identifier.use",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Identifier.type",
      path: "Identifier.type",
      short: "Description of identifier",
      definition:
        "A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.",
      comment:
        "This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.",
      requirements:
        "Allows users to make use of identifiers when the identifier system is not known.",
      min: 0,
      max: "1",
      base: { path: "Identifier.type", min: 0, max: "1" },
      type: [{ code: "CodeableConcept" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "IdentifierType",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/identifier-type",
      },
      mapping: [
        { identity: "v2", map: "CX.5" },
        { identity: "rim", map: "Role.code or implied by context" },
      ],
    },
    dataPath: "root.identifier[0].type",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.type",
    baseId: "Identifier.type",
    isPrimitive: false,
    childPaths: [
      "root.identifier[0].type.coding[0]",
      "root.identifier[0].type.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
      type: [{ code: "Coding" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.identifier[0].type.coding[0]",
    parentDataPath: "root.identifier[0].type",
    basePath: "root.identifier.type.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.identifier[0].type.coding[0].system",
      "root.identifier[0].type.coding[0].version",
      "root.identifier[0].type.coding[0].code",
      "root.identifier[0].type.coding[0].display",
      "root.identifier[0].type.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.identifier[0].type.coding[0].system",
    parentDataPath: "root.identifier[0].type.coding[0]",
    basePath: "root.identifier.type.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.identifier[0].type.coding[0].version",
    parentDataPath: "root.identifier[0].type.coding[0]",
    basePath: "root.identifier.type.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.identifier[0].type.coding[0].code",
    parentDataPath: "root.identifier[0].type.coding[0]",
    basePath: "root.identifier.type.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.identifier[0].type.coding[0].display",
    parentDataPath: "root.identifier[0].type.coding[0]",
    basePath: "root.identifier.type.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
      type: [{ code: "boolean" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.identifier[0].type.coding[0].userSelected",
    parentDataPath: "root.identifier[0].type.coding[0]",
    basePath: "root.identifier.type.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.identifier[0].type.text",
    parentDataPath: "root.identifier[0].type",
    basePath: "root.identifier.type.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Identifier.system",
      path: "Identifier.system",
      short: "The namespace for the identifier value",
      definition:
        "Establishes the namespace for the value - that is, a URL that describes a set values that are unique.",
      comment: "Identifier.system is always case sensitive.",
      requirements:
        "There are many sets  of identifiers.  To perform matching of two identifiers, we need to know what set we're dealing with. The system identifies a particular set of unique identifiers.",
      min: 0,
      max: "1",
      base: { path: "Identifier.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      example: [
        {
          label: "General",
          valueUri: "http://www.acme.com/identifiers/patient",
        },
      ],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "CX.4 / EI-2-4" },
        { identity: "rim", map: "II.root or Role.id.root" },
        { identity: "servd", map: "./IdentifierType" },
      ],
    },
    dataPath: "root.identifier[0].system",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.system",
    baseId: "Identifier.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Identifier.value",
      path: "Identifier.value",
      short: "The value that is unique",
      definition:
        "The portion of the identifier typically relevant to the user and which is unique within the context of the system.",
      comment:
        "If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.",
      min: 0,
      max: "1",
      base: { path: "Identifier.value", min: 0, max: "1" },
      type: [{ code: "string" }],
      example: [{ label: "General", valueString: "123456" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "CX.1 / EI.1" },
        {
          identity: "rim",
          map: "II.extension or II.root if system indicates OID or GUID (Or Role.id.extension or root)",
        },
        { identity: "servd", map: "./Value" },
      ],
    },
    dataPath: "root.identifier[0].value",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.value",
    baseId: "Identifier.value",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Identifier.period",
      path: "Identifier.period",
      short: "Time period when id is/was valid for use",
      definition: "Time period during which identifier is/was valid for use.",
      min: 0,
      max: "1",
      base: { path: "Identifier.period", min: 0, max: "1" },
      type: [{ code: "Period" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "CX.7 + CX.8" },
        { identity: "rim", map: "Role.effectiveTime or implied by context" },
        { identity: "servd", map: "./StartDate and ./EndDate" },
      ],
    },
    dataPath: "root.identifier[0].period",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.period",
    baseId: "Identifier.period",
    isPrimitive: false,
    childPaths: [
      "root.identifier[0].period.start",
      "root.identifier[0].period.end",
    ],
    value: "",
  },
  {
    element: {
      id: "Period.start",
      path: "Period.start",
      short: "Starting time with inclusive boundary",
      definition: "The start of the period. The boundary is inclusive.",
      comment:
        "If the low element is missing, the meaning is that the low boundary is not known.",
      min: 0,
      max: "1",
      base: { path: "Period.start", min: 0, max: "1" },
      type: [{ code: "dateTime" }],
      condition: ["per-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "DR.1" },
        { identity: "rim", map: "./low" },
      ],
    },
    dataPath: "root.identifier[0].period.start",
    parentDataPath: "root.identifier[0].period",
    basePath: "root.identifier.period.start",
    baseId: "Period.start",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Period.end",
      path: "Period.end",
      short: "End time with inclusive boundary, if not ongoing",
      definition:
        "The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.",
      comment:
        "The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.",
      min: 0,
      max: "1",
      base: { path: "Period.end", min: 0, max: "1" },
      type: [{ code: "dateTime" }],
      meaningWhenMissing:
        "If the end of the period is missing, it means that the period is ongoing",
      condition: ["per-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "DR.2" },
        { identity: "rim", map: "./high" },
      ],
    },
    dataPath: "root.identifier[0].period.end",
    parentDataPath: "root.identifier[0].period",
    basePath: "root.identifier.period.end",
    baseId: "Period.end",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Identifier.assigner",
      path: "Identifier.assigner",
      short: "Organization that issued id (may be just text)",
      definition: "Organization that issued/manages the identifier.",
      comment:
        "The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.",
      min: 0,
      max: "1",
      base: { path: "Identifier.assigner", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Organization",
          ],
        },
      ],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "CX.4 / (CX.4,CX.9,CX.10)" },
        {
          identity: "rim",
          map: "II.assigningAuthorityName but note that this is an improper use by the definition of the field.  Also Role.scoper",
        },
        { identity: "servd", map: "./IdentifierIssuingAuthority" },
      ],
    },
    dataPath: "root.identifier[0].assigner",
    parentDataPath: "root.identifier[0]",
    basePath: "root.identifier.assigner",
    baseId: "Identifier.assigner",
    isPrimitive: false,
    childPaths: [
      "root.identifier[0].assigner.reference",
      "root.identifier[0].assigner.type",
      "root.identifier[0].assigner.display",
    ],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.identifier[0].assigner.reference",
    parentDataPath: "root.identifier[0].assigner",
    basePath: "root.identifier.assigner.reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.identifier[0].assigner.type",
    parentDataPath: "root.identifier[0].assigner",
    basePath: "root.identifier.assigner.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.identifier[0].assigner.display",
    parentDataPath: "root.identifier[0].assigner",
    basePath: "root.identifier.assigner.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.patient",
      path: "ImmunizationRecommendation.patient",
      short: "Who this profile is for",
      definition: "The patient the recommendation(s) are for.",
      min: 1,
      max: "1",
      base: { path: "ImmunizationRecommendation.patient", min: 1, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
        },
      ],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Request.subject" },
        { identity: "w5", map: "FiveWs.subject[x]" },
        { identity: "v2", map: "PID-3" },
        { identity: "rim", map: ".partipication[typeCode=SUBJ].role" },
        { identity: "w5", map: "FiveWs.subject" },
      ],
    },
    dataPath: "root.patient",
    parentDataPath: "root",
    basePath: "root.patient",
    baseId: "ImmunizationRecommendation.patient",
    isPrimitive: false,
    childPaths: [
      "root.patient.reference",
      "root.patient.type",
      "root.patient.display",
    ],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.patient.reference",
    parentDataPath: "root.patient",
    basePath: "root.patient.reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.patient.type",
    parentDataPath: "root.patient",
    basePath: "root.patient.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.patient.display",
    parentDataPath: "root.patient",
    basePath: "root.patient.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.date",
      path: "ImmunizationRecommendation.date",
      short: "Date recommendation(s) created",
      definition: "The date the immunization recommendation(s) were created.",
      min: 1,
      max: "1",
      base: { path: "ImmunizationRecommendation.date", min: 1, max: "1" },
      type: [{ code: "dateTime" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "workflow", map: "Request.authoredOn" },
        { identity: "v2", map: "OBX-15" },
        { identity: "rim", map: ".partipication[typeCode=AUTH].time" },
      ],
    },
    dataPath: "root.date",
    parentDataPath: "root",
    basePath: "root.date",
    baseId: "ImmunizationRecommendation.date",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.authority",
      path: "ImmunizationRecommendation.authority",
      short: "Who is responsible for protocol",
      definition:
        "Indicates the authority who published the protocol (e.g. ACIP).",
      min: 0,
      max: "1",
      base: { path: "ImmunizationRecommendation.authority", min: 0, max: "1" },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Organization",
          ],
        },
      ],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "v2", map: "OBX-5 : OBX-3 = 59779-9" },
        { identity: "rim", map: ".participation[typeCode=AUT]" },
      ],
    },
    dataPath: "root.authority",
    parentDataPath: "root",
    basePath: "root.authority",
    baseId: "ImmunizationRecommendation.authority",
    isPrimitive: false,
    childPaths: [
      "root.authority.reference",
      "root.authority.type",
      "root.authority.display",
    ],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.authority.reference",
    parentDataPath: "root.authority",
    basePath: "root.authority.reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.authority.type",
    parentDataPath: "root.authority",
    basePath: "root.authority.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.authority.display",
    parentDataPath: "root.authority",
    basePath: "root.authority.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation",
      path: "ImmunizationRecommendation.recommendation",
      short: "Vaccine administration recommendations",
      definition: "Vaccine administration recommendations.",
      min: 1,
      max: "*",
      base: {
        path: "ImmunizationRecommendation.recommendation",
        min: 1,
        max: "*",
      },
      type: [{ code: "BackboneElement" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human:
            "All FHIR elements must have a @value or children unless an empty Parameters resource",
          expression:
            "hasValue() or (children().count() > id.count()) or $this is Parameters",
          xpath: "@value|f:*|h:div|self::f:Parameters",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
        {
          key: "imr-1",
          severity: "error",
          human: "One of vaccineCode or targetDisease SHALL be present",
          expression: "vaccineCode.exists() or targetDisease.exists()",
          xpath: "exists(f:vaccineCode) or exists(f:targetDisease)",
          source:
            "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode='COMP'].target[classCode=SBADM, moodCode=RMD]",
        },
      ],
    },
    dataPath: "root.recommendation[0]",
    parentDataPath: "root",
    basePath: "root.recommendation",
    baseId: "ImmunizationRecommendation.recommendation",
    isPrimitive: false,
    childPaths: ["root.recommendation[0].modifierExtension[0]"],
    value: "",
  },
  {
    element: {
      id: "BackboneElement.modifierExtension",
      path: "BackboneElement.modifierExtension",
      short: "Extensions that cannot be ignored even if unrecognized",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content", "modifiers"],
      min: 0,
      max: "*",
      base: { path: "BackboneElement.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
        {
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.recommendation[0].modifierExtension[0]",
    parentDataPath: "root.recommendation[0]",
    basePath: "root.recommendation.modifierExtension",
    baseId: "BackboneElement.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.modifierExtension",
      path: "ImmunizationRecommendation.recommendation.modifierExtension",
      short: "Extensions that cannot be ignored even if unrecognized",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content", "modifiers"],
      min: 0,
      max: "*",
      base: { path: "BackboneElement.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
        {
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.recommendation.modifierExtension[0]",
    parentDataPath: "root.recommendation",
    basePath: "root.modifierExtension",
    baseId: "ImmunizationRecommendation.recommendation.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.vaccineCode",
      path: "ImmunizationRecommendation.recommendation.vaccineCode",
      short: "Vaccine  or vaccine group recommendation applies to",
      definition:
        "Vaccine(s) or vaccine group that pertain to the recommendation.",
      min: 0,
      max: "*",
      base: {
        path: "ImmunizationRecommendation.recommendation.vaccineCode",
        min: 0,
        max: "*",
      },
      type: [{ code: "CodeableConcept" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "VaccineCode",
          },
        ],
        strength: "example",
        description: "The type of vaccine administered.",
        valueSet: "http://hl7.org/fhir/ValueSet/vaccine-code",
      },
      mapping: [
        { identity: "workflow", map: "Request.code" },
        { identity: "v2", map: "OBX-5 : OBX-3 = ( 30956-7 | 38890-0 )" },
        {
          identity: "rim",
          map: ".partipication[typeCode=CSM].role[classCode=ADMM].code",
        },
      ],
    },
    dataPath: "root.recommendation.vaccineCode[0]",
    parentDataPath: "root.recommendation",
    basePath: "root.vaccineCode",
    baseId: "ImmunizationRecommendation.recommendation.vaccineCode",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.vaccineCode[0].coding[0]",
      "root.recommendation.vaccineCode[0].text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
      type: [{ code: "Coding" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.recommendation.vaccineCode[0].coding[0]",
    parentDataPath: "root.recommendation.vaccineCode[0]",
    basePath: "root.vaccineCode.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.vaccineCode[0].coding[0].system",
      "root.recommendation.vaccineCode[0].coding[0].version",
      "root.recommendation.vaccineCode[0].coding[0].code",
      "root.recommendation.vaccineCode[0].coding[0].display",
      "root.recommendation.vaccineCode[0].coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.recommendation.vaccineCode[0].coding[0].system",
    parentDataPath: "root.recommendation.vaccineCode[0].coding[0]",
    basePath: "root.vaccineCode.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.recommendation.vaccineCode[0].coding[0].version",
    parentDataPath: "root.recommendation.vaccineCode[0].coding[0]",
    basePath: "root.vaccineCode.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.recommendation.vaccineCode[0].coding[0].code",
    parentDataPath: "root.recommendation.vaccineCode[0].coding[0]",
    basePath: "root.vaccineCode.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.recommendation.vaccineCode[0].coding[0].display",
    parentDataPath: "root.recommendation.vaccineCode[0].coding[0]",
    basePath: "root.vaccineCode.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
      type: [{ code: "boolean" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.recommendation.vaccineCode[0].coding[0].userSelected",
    parentDataPath: "root.recommendation.vaccineCode[0].coding[0]",
    basePath: "root.vaccineCode.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.recommendation.vaccineCode[0].text",
    parentDataPath: "root.recommendation.vaccineCode[0]",
    basePath: "root.vaccineCode.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.targetDisease",
      path: "ImmunizationRecommendation.recommendation.targetDisease",
      short: "Disease to be immunized against",
      definition: "The targeted disease for the recommendation.",
      min: 0,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.targetDisease",
        min: 0,
        max: "1",
      },
      type: [{ code: "CodeableConcept" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "TargetDisease",
          },
        ],
        strength: "example",
        description: "The disease that the recommended vaccination targets.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/immunization-recommendation-target-disease",
      },
      mapping: [
        { identity: "v2", map: "OBX-5 : OBX-3 = ( 30956-7 | 38890-0 )" },
        {
          identity: "rim",
          map: ".partipication[typeCode=CSM].role[classCode=ADMM].code",
        },
      ],
    },
    dataPath: "root.recommendation.targetDisease",
    parentDataPath: "root.recommendation",
    basePath: "root.targetDisease",
    baseId: "ImmunizationRecommendation.recommendation.targetDisease",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.targetDisease.coding[0]",
      "root.recommendation.targetDisease.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
      type: [{ code: "Coding" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.recommendation.targetDisease.coding[0]",
    parentDataPath: "root.recommendation.targetDisease",
    basePath: "root.targetDisease.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.targetDisease.coding[0].system",
      "root.recommendation.targetDisease.coding[0].version",
      "root.recommendation.targetDisease.coding[0].code",
      "root.recommendation.targetDisease.coding[0].display",
      "root.recommendation.targetDisease.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.recommendation.targetDisease.coding[0].system",
    parentDataPath: "root.recommendation.targetDisease.coding[0]",
    basePath: "root.targetDisease.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.recommendation.targetDisease.coding[0].version",
    parentDataPath: "root.recommendation.targetDisease.coding[0]",
    basePath: "root.targetDisease.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.recommendation.targetDisease.coding[0].code",
    parentDataPath: "root.recommendation.targetDisease.coding[0]",
    basePath: "root.targetDisease.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.recommendation.targetDisease.coding[0].display",
    parentDataPath: "root.recommendation.targetDisease.coding[0]",
    basePath: "root.targetDisease.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
      type: [{ code: "boolean" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.recommendation.targetDisease.coding[0].userSelected",
    parentDataPath: "root.recommendation.targetDisease.coding[0]",
    basePath: "root.targetDisease.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.recommendation.targetDisease.text",
    parentDataPath: "root.recommendation.targetDisease",
    basePath: "root.targetDisease.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.contraindicatedVaccineCode",
      path: "ImmunizationRecommendation.recommendation.contraindicatedVaccineCode",
      short: "Vaccine which is contraindicated to fulfill the recommendation",
      definition:
        "Vaccine(s) which should not be used to fulfill the recommendation.",
      min: 0,
      max: "*",
      base: {
        path: "ImmunizationRecommendation.recommendation.contraindicatedVaccineCode",
        min: 0,
        max: "*",
      },
      type: [{ code: "CodeableConcept" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "VaccineCode",
          },
        ],
        strength: "example",
        description: "The type of vaccine administered.",
        valueSet: "http://hl7.org/fhir/ValueSet/vaccine-code",
      },
    },
    dataPath: "root.recommendation.contraindicatedVaccineCode[0]",
    parentDataPath: "root.recommendation",
    basePath: "root.contraindicatedVaccineCode",
    baseId:
      "ImmunizationRecommendation.recommendation.contraindicatedVaccineCode",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.contraindicatedVaccineCode[0].coding[0]",
      "root.recommendation.contraindicatedVaccineCode[0].text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
      type: [{ code: "Coding" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.recommendation.contraindicatedVaccineCode[0].coding[0]",
    parentDataPath: "root.recommendation.contraindicatedVaccineCode[0]",
    basePath: "root.contraindicatedVaccineCode.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.contraindicatedVaccineCode[0].coding[0].system",
      "root.recommendation.contraindicatedVaccineCode[0].coding[0].version",
      "root.recommendation.contraindicatedVaccineCode[0].coding[0].code",
      "root.recommendation.contraindicatedVaccineCode[0].coding[0].display",
      "root.recommendation.contraindicatedVaccineCode[0].coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath:
      "root.recommendation.contraindicatedVaccineCode[0].coding[0].system",
    parentDataPath:
      "root.recommendation.contraindicatedVaccineCode[0].coding[0]",
    basePath: "root.contraindicatedVaccineCode.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath:
      "root.recommendation.contraindicatedVaccineCode[0].coding[0].version",
    parentDataPath:
      "root.recommendation.contraindicatedVaccineCode[0].coding[0]",
    basePath: "root.contraindicatedVaccineCode.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath:
      "root.recommendation.contraindicatedVaccineCode[0].coding[0].code",
    parentDataPath:
      "root.recommendation.contraindicatedVaccineCode[0].coding[0]",
    basePath: "root.contraindicatedVaccineCode.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath:
      "root.recommendation.contraindicatedVaccineCode[0].coding[0].display",
    parentDataPath:
      "root.recommendation.contraindicatedVaccineCode[0].coding[0]",
    basePath: "root.contraindicatedVaccineCode.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
      type: [{ code: "boolean" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath:
      "root.recommendation.contraindicatedVaccineCode[0].coding[0].userSelected",
    parentDataPath:
      "root.recommendation.contraindicatedVaccineCode[0].coding[0]",
    basePath: "root.contraindicatedVaccineCode.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.recommendation.contraindicatedVaccineCode[0].text",
    parentDataPath: "root.recommendation.contraindicatedVaccineCode[0]",
    basePath: "root.contraindicatedVaccineCode.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.forecastStatus",
      path: "ImmunizationRecommendation.recommendation.forecastStatus",
      short: "Vaccine recommendation status",
      definition:
        "Indicates the patient status with respect to the path to immunity for the target disease.",
      min: 1,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.forecastStatus",
        min: 1,
        max: "1",
      },
      type: [{ code: "CodeableConcept" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: true,
      isModifierReason:
        "This element is labeled as a modifier because the forecastStatus indicates whether a patient needs additional doses (due, overdue, etc) or not  (contraindicated, complete, etc).",
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "ImmunizationRecommendationStatus",
          },
        ],
        strength: "example",
        description:
          "The patient's status with respect to a vaccination protocol.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/immunization-recommendation-status",
      },
      mapping: [
        { identity: "v2", map: "OBX-5 : OBX-3 = 59783-1" },
        {
          identity: "rim",
          map: '.inboundRelationship[typeCode=SUBJ] .source[classCode=OBS, moodCode=EVN, code="Immunization Forecast Status"].value',
        },
      ],
    },
    dataPath: "root.recommendation.forecastStatus",
    parentDataPath: "root.recommendation",
    basePath: "root.forecastStatus",
    baseId: "ImmunizationRecommendation.recommendation.forecastStatus",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.forecastStatus.coding[0]",
      "root.recommendation.forecastStatus.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
      type: [{ code: "Coding" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.recommendation.forecastStatus.coding[0]",
    parentDataPath: "root.recommendation.forecastStatus",
    basePath: "root.forecastStatus.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.forecastStatus.coding[0].system",
      "root.recommendation.forecastStatus.coding[0].version",
      "root.recommendation.forecastStatus.coding[0].code",
      "root.recommendation.forecastStatus.coding[0].display",
      "root.recommendation.forecastStatus.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.recommendation.forecastStatus.coding[0].system",
    parentDataPath: "root.recommendation.forecastStatus.coding[0]",
    basePath: "root.forecastStatus.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.recommendation.forecastStatus.coding[0].version",
    parentDataPath: "root.recommendation.forecastStatus.coding[0]",
    basePath: "root.forecastStatus.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.recommendation.forecastStatus.coding[0].code",
    parentDataPath: "root.recommendation.forecastStatus.coding[0]",
    basePath: "root.forecastStatus.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.recommendation.forecastStatus.coding[0].display",
    parentDataPath: "root.recommendation.forecastStatus.coding[0]",
    basePath: "root.forecastStatus.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
      type: [{ code: "boolean" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.recommendation.forecastStatus.coding[0].userSelected",
    parentDataPath: "root.recommendation.forecastStatus.coding[0]",
    basePath: "root.forecastStatus.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.recommendation.forecastStatus.text",
    parentDataPath: "root.recommendation.forecastStatus",
    basePath: "root.forecastStatus.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.forecastReason",
      path: "ImmunizationRecommendation.recommendation.forecastReason",
      short: "Vaccine administration status reason",
      definition: "The reason for the assigned forecast status.",
      min: 0,
      max: "*",
      base: {
        path: "ImmunizationRecommendation.recommendation.forecastReason",
        min: 0,
        max: "*",
      },
      type: [{ code: "CodeableConcept" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "ImmunizationRecommendationReason",
          },
        ],
        strength: "example",
        description:
          "The reason for the patient's status with respect to a vaccination protocol.",
        valueSet:
          "http://hl7.org/fhir/ValueSet/immunization-recommendation-reason",
      },
      mapping: [
        { identity: "v2", map: "OBX-5 : OBX-3 = 30982-3" },
        { identity: "rim", map: "N/A" },
      ],
    },
    dataPath: "root.recommendation.forecastReason[0]",
    parentDataPath: "root.recommendation",
    basePath: "root.forecastReason",
    baseId: "ImmunizationRecommendation.recommendation.forecastReason",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.forecastReason[0].coding[0]",
      "root.recommendation.forecastReason[0].text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
      type: [{ code: "Coding" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.recommendation.forecastReason[0].coding[0]",
    parentDataPath: "root.recommendation.forecastReason[0]",
    basePath: "root.forecastReason.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.forecastReason[0].coding[0].system",
      "root.recommendation.forecastReason[0].coding[0].version",
      "root.recommendation.forecastReason[0].coding[0].code",
      "root.recommendation.forecastReason[0].coding[0].display",
      "root.recommendation.forecastReason[0].coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.recommendation.forecastReason[0].coding[0].system",
    parentDataPath: "root.recommendation.forecastReason[0].coding[0]",
    basePath: "root.forecastReason.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.recommendation.forecastReason[0].coding[0].version",
    parentDataPath: "root.recommendation.forecastReason[0].coding[0]",
    basePath: "root.forecastReason.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.recommendation.forecastReason[0].coding[0].code",
    parentDataPath: "root.recommendation.forecastReason[0].coding[0]",
    basePath: "root.forecastReason.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.recommendation.forecastReason[0].coding[0].display",
    parentDataPath: "root.recommendation.forecastReason[0].coding[0]",
    basePath: "root.forecastReason.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
      type: [{ code: "boolean" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.recommendation.forecastReason[0].coding[0].userSelected",
    parentDataPath: "root.recommendation.forecastReason[0].coding[0]",
    basePath: "root.forecastReason.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.recommendation.forecastReason[0].text",
    parentDataPath: "root.recommendation.forecastReason[0]",
    basePath: "root.forecastReason.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.dateCriterion",
      path: "ImmunizationRecommendation.recommendation.dateCriterion",
      short: "Dates governing proposed immunization",
      definition:
        "Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.",
      min: 0,
      max: "*",
      base: {
        path: "ImmunizationRecommendation.recommendation.dateCriterion",
        min: 0,
        max: "*",
      },
      type: [{ code: "BackboneElement" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human:
            "All FHIR elements must have a @value or children unless an empty Parameters resource",
          expression:
            "hasValue() or (children().count() > id.count()) or $this is Parameters",
          xpath: "@value|f:*|h:div|self::f:Parameters",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "workflow", map: "Request.occurrence[x]" },
        {
          identity: "v2",
          map: "OBX-3: 30980-7 = Next dose recommended, 59777-3 = Latest next dose should be given, 59778-1 = Dose is overdue",
        },
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode='LIMIT'].target[classCode=OBS, moodCode=EVN, isCriterionInd=true]",
        },
      ],
    },
    dataPath: "root.recommendation.dateCriterion[0]",
    parentDataPath: "root.recommendation",
    basePath: "root.dateCriterion",
    baseId: "ImmunizationRecommendation.recommendation.dateCriterion",
    isPrimitive: false,
    childPaths: ["root.recommendation.dateCriterion[0].modifierExtension[0]"],
    value: "",
  },
  {
    element: {
      id: "BackboneElement.modifierExtension",
      path: "BackboneElement.modifierExtension",
      short: "Extensions that cannot be ignored even if unrecognized",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content", "modifiers"],
      min: 0,
      max: "*",
      base: { path: "BackboneElement.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
        {
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.recommendation.dateCriterion[0].modifierExtension[0]",
    parentDataPath: "root.recommendation.dateCriterion[0]",
    basePath: "root.dateCriterion.modifierExtension",
    baseId: "BackboneElement.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.dateCriterion.modifierExtension",
      path: "ImmunizationRecommendation.recommendation.dateCriterion.modifierExtension",
      short: "Extensions that cannot be ignored even if unrecognized",
      definition:
        "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
      comment:
        "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.",
      requirements:
        "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension).",
      alias: ["extensions", "user content", "modifiers"],
      min: 0,
      max: "*",
      base: { path: "BackboneElement.modifierExtension", min: 0, max: "*" },
      type: [{ code: "Extension" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
        {
          key: "ext-1",
          severity: "error",
          human: "Must have either extensions or value[x], not both",
          expression: "extension.exists() != value.exists()",
          xpath:
            'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
          source: "http://hl7.org/fhir/StructureDefinition/Extension",
        },
      ],
      isModifier: true,
      isModifierReason:
        "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them",
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.recommendation.dateCriterion.modifierExtension[0]",
    parentDataPath: "root.recommendation.dateCriterion",
    basePath: "root.modifierExtension",
    baseId:
      "ImmunizationRecommendation.recommendation.dateCriterion.modifierExtension",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.dateCriterion.code",
      path: "ImmunizationRecommendation.recommendation.dateCriterion.code",
      short: "Type of date",
      definition:
        "Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.",
      min: 1,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.dateCriterion.code",
        min: 1,
        max: "1",
      },
      type: [{ code: "CodeableConcept" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "ImmunizationRecommendationDateCriterion",
          },
        ],
        strength: "example",
        description:
          "Classifies date criterion with respect to conveying information about a patient's vaccination status (e.g. due date, latest to give date, etc.).",
        valueSet:
          "http://hl7.org/fhir/ValueSet/immunization-recommendation-date-criterion",
      },
      mapping: [
        { identity: "v2", map: "OBX-3" },
        { identity: "rim", map: ".code" },
      ],
    },
    dataPath: "root.recommendation.dateCriterion.code",
    parentDataPath: "root.recommendation.dateCriterion",
    basePath: "root.code",
    baseId: "ImmunizationRecommendation.recommendation.dateCriterion.code",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.dateCriterion.code.coding[0]",
      "root.recommendation.dateCriterion.code.text",
    ],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.coding",
      path: "CodeableConcept.coding",
      short: "Code defined by a terminology system",
      definition: "A reference to a code defined by a terminology system.",
      comment:
        "Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.",
      requirements:
        "Allows for alternative encodings within a code system, and translations to other code systems.",
      min: 0,
      max: "*",
      base: { path: "CodeableConcept.coding", min: 0, max: "*" },
      type: [{ code: "Coding" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1-8, C*E.10-22" },
        { identity: "rim", map: "union(., ./translation)" },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.coding rdfs:subPropertyOf dt:CD.coding",
        },
      ],
    },
    dataPath: "root.recommendation.dateCriterion.code.coding[0]",
    parentDataPath: "root.recommendation.dateCriterion.code",
    basePath: "root.code.coding",
    baseId: "CodeableConcept.coding",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.dateCriterion.code.coding[0].system",
      "root.recommendation.dateCriterion.code.coding[0].version",
      "root.recommendation.dateCriterion.code.coding[0].code",
      "root.recommendation.dateCriterion.code.coding[0].display",
      "root.recommendation.dateCriterion.code.coding[0].userSelected",
    ],
    value: "",
  },
  {
    element: {
      id: "Coding.system",
      path: "Coding.system",
      short: "Identity of the terminology system",
      definition:
        "The identification of the code system that defines the meaning of the symbol in the code.",
      comment:
        "The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.",
      requirements:
        "Need to be unambiguous about the source of the definition of the symbol.",
      min: 0,
      max: "1",
      base: { path: "Coding.system", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.3" },
        { identity: "rim", map: "./codeSystem" },
        {
          identity: "orim",
          map: "fhir:Coding.system rdfs:subPropertyOf dt:CDCoding.codeSystem",
        },
      ],
    },
    dataPath: "root.recommendation.dateCriterion.code.coding[0].system",
    parentDataPath: "root.recommendation.dateCriterion.code.coding[0]",
    basePath: "root.code.coding.system",
    baseId: "Coding.system",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.version",
      path: "Coding.version",
      short: "Version of the system - if relevant",
      definition:
        "The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
      comment:
        "Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.",
      min: 0,
      max: "1",
      base: { path: "Coding.version", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.7" },
        { identity: "rim", map: "./codeSystemVersion" },
        {
          identity: "orim",
          map: "fhir:Coding.version rdfs:subPropertyOf dt:CDCoding.codeSystemVersion",
        },
      ],
    },
    dataPath: "root.recommendation.dateCriterion.code.coding[0].version",
    parentDataPath: "root.recommendation.dateCriterion.code.coding[0]",
    basePath: "root.code.coding.version",
    baseId: "Coding.version",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.code",
      extension: [
        {
          url: "http://hl7.org/fhir/build/StructureDefinition/no-binding",
          valueBoolean: true,
        },
      ],
      path: "Coding.code",
      short: "Symbol in syntax defined by the system",
      definition:
        "A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
      requirements: "Need to refer to a particular code in the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.code", min: 0, max: "1" },
      type: [{ code: "code" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.1" },
        { identity: "rim", map: "./code" },
        {
          identity: "orim",
          map: "fhir:Coding.code rdfs:subPropertyOf dt:CDCoding.code",
        },
      ],
    },
    dataPath: "root.recommendation.dateCriterion.code.coding[0].code",
    parentDataPath: "root.recommendation.dateCriterion.code.coding[0]",
    basePath: "root.code.coding.code",
    baseId: "Coding.code",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Coding.display",
      short: "Representation defined by the system",
      definition:
        "A representation of the meaning of the code in the system, following the rules of the system.",
      requirements:
        "Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.",
      min: 0,
      max: "1",
      base: { path: "Coding.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "C*E.2 - but note this is not well followed" },
        { identity: "rim", map: "CV.displayName" },
        {
          identity: "orim",
          map: "fhir:Coding.display rdfs:subPropertyOf dt:CDCoding.displayName",
        },
      ],
    },
    dataPath: "root.recommendation.dateCriterion.code.coding[0].display",
    parentDataPath: "root.recommendation.dateCriterion.code.coding[0]",
    basePath: "root.code.coding.display",
    baseId: "Coding.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Coding.userSelected",
      path: "Coding.userSelected",
      short: "If this coding was chosen directly by the user",
      definition:
        "Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
      comment:
        "Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.",
      requirements:
        "This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.",
      min: 0,
      max: "1",
      base: { path: "Coding.userSelected", min: 0, max: "1" },
      type: [{ code: "boolean" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "Sometimes implied by being first" },
        { identity: "rim", map: "CD.codingRationale" },
        {
          identity: "orim",
          map: 'fhir:Coding.userSelected fhir:mapsTo dt:CDCoding.codingRationale. fhir:Coding.userSelected fhir:hasMap fhir:Coding.userSelected.map. fhir:Coding.userSelected.map a fhir:Map;   fhir:target dt:CDCoding.codingRationale. fhir:Coding.userSelected#true a [     fhir:source "true";     fhir:target dt:CDCoding.codingRationale#O   ]',
        },
      ],
    },
    dataPath: "root.recommendation.dateCriterion.code.coding[0].userSelected",
    parentDataPath: "root.recommendation.dateCriterion.code.coding[0]",
    basePath: "root.code.coding.userSelected",
    baseId: "Coding.userSelected",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "CodeableConcept.text",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "CodeableConcept.text",
      short: "Plain text representation of the concept",
      definition:
        "A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
      comment:
        "Very often the text is the same as a displayName of one of the codings.",
      requirements:
        "The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.",
      min: 0,
      max: "1",
      base: { path: "CodeableConcept.text", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [
        {
          identity: "v2",
          map: "C*E.9. But note many systems use C*E.2 for this",
        },
        {
          identity: "rim",
          map: './originalText[mediaType/code="text/plain"]/data',
        },
        {
          identity: "orim",
          map: "fhir:CodeableConcept.text rdfs:subPropertyOf dt:CD.originalText",
        },
      ],
    },
    dataPath: "root.recommendation.dateCriterion.code.text",
    parentDataPath: "root.recommendation.dateCriterion.code",
    basePath: "root.code.text",
    baseId: "CodeableConcept.text",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.dateCriterion.value",
      path: "ImmunizationRecommendation.recommendation.dateCriterion.value",
      short: "Recommended date",
      definition: "The date whose meaning is specified by dateCriterion.code.",
      min: 1,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.dateCriterion.value",
        min: 1,
        max: "1",
      },
      type: [{ code: "dateTime" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "v2", map: "OBX-5" },
        { identity: "rim", map: ".value" },
      ],
    },
    dataPath: "root.recommendation.dateCriterion.value",
    parentDataPath: "root.recommendation.dateCriterion",
    basePath: "root.value",
    baseId: "ImmunizationRecommendation.recommendation.dateCriterion.value",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.description",
      path: "ImmunizationRecommendation.recommendation.description",
      short: "Protocol details",
      definition:
        "Contains the description about the protocol under which the vaccine was administered.",
      min: 0,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.description",
        min: 0,
        max: "1",
      },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "v2", map: "OBX-5 : OBX-3 = 30956-7" },
        { identity: "rim", map: ".text" },
      ],
    },
    dataPath: "root.recommendation.description",
    parentDataPath: "root.recommendation",
    basePath: "root.description",
    baseId: "ImmunizationRecommendation.recommendation.description",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.series",
      path: "ImmunizationRecommendation.recommendation.series",
      short: "Name of vaccination series",
      definition:
        "One possible path to achieve presumed immunity against a disease - within the context of an authority.",
      min: 0,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.series",
        min: 0,
        max: "1",
      },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "v2", map: "RXA-5-administered code" },
        { identity: "rim", map: ".title" },
      ],
    },
    dataPath: "root.recommendation.series",
    parentDataPath: "root.recommendation",
    basePath: "root.series",
    baseId: "ImmunizationRecommendation.recommendation.series",
    isPrimitive: true,
    isRootPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.doseNumber[x]",
      path: "ImmunizationRecommendation.recommendation.doseNumber[x]",
      short: "Recommended dose number within series",
      definition:
        "Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).",
      comment:
        "The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).",
      min: 0,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.doseNumber[x]",
        min: 0,
        max: "1",
      },
      type: [{ code: "positiveInt" }, { code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: true,
      mapping: [
        { identity: "v2", map: "OBX-5 : OBX-3 = 30973-2" },
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=COMP, .source[classCode=SBADM, moodCode=INT]].sequenceNumber",
        },
      ],
    },
    dataPath: "root.recommendation.doseNumber[x]",
    parentDataPath: "root.recommendation",
    basePath: "root.doseNumber[x]",
    baseId: "ImmunizationRecommendation.recommendation.doseNumber[x]",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.doseNumberPositiveInt.positiveInt",
      "root.recommendation.doseNumberString.string",
    ],
    type: "positiveInt",
    value: "",
  },
  {
    element: {
      id: "positiveInt",
      path: "positiveInt",
      short: "Primitive Type positiveInt",
      definition: "An integer with a value that is positive (e.g. >0)",
      min: 0,
      max: "1",
      base: { path: "positiveInt", min: 0, max: "*" },
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human:
            "All FHIR elements must have a @value or children unless an empty Parameters resource",
          expression:
            "hasValue() or (children().count() > id.count()) or $this is Parameters",
          xpath: "@value|f:*|h:div|self::f:Parameters",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: false,
      type: [{ code: "positiveInt" }],
    },
    dataPath: "root.recommendation.doseNumberPositiveInt.positiveInt",
    parentDataPath: "root.recommendation.doseNumber[x]",
    basePath: "root.doseNumber[x].positiveInt",
    baseId: "ImmunizationRecommendation.recommendation.doseNumber[x]",
    isPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "string",
      path: "string",
      short: "Primitive Type string",
      definition: "A sequence of Unicode characters",
      comment: "Note that FHIR strings SHALL NOT exceed 1MB in size",
      min: 0,
      max: "1",
      base: { path: "string", min: 0, max: "*" },
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human:
            "All FHIR elements must have a @value or children unless an empty Parameters resource",
          expression:
            "hasValue() or (children().count() > id.count()) or $this is Parameters",
          xpath: "@value|f:*|h:div|self::f:Parameters",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: false,
      type: [{ code: "string" }],
    },
    dataPath: "root.recommendation.doseNumberString.string",
    parentDataPath: "root.recommendation.doseNumber[x]",
    basePath: "root.doseNumber[x].string",
    baseId: "ImmunizationRecommendation.recommendation.doseNumber[x]",
    isPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.seriesDoses[x]",
      path: "ImmunizationRecommendation.recommendation.seriesDoses[x]",
      short: "Recommended number of doses for immunity",
      definition: "The recommended number of doses to achieve immunity.",
      comment:
        "The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).",
      min: 0,
      max: "1",
      base: {
        path: "ImmunizationRecommendation.recommendation.seriesDoses[x]",
        min: 0,
        max: "1",
      },
      type: [{ code: "positiveInt" }, { code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "v2", map: "OBX-5 : OBX-3 = 59782-3" },
        {
          identity: "rim",
          map: ".inboundRelationship[typeCode=COMP, .source[classCode=SBADM, moodCode=DEF]].sequenceNumber",
        },
      ],
    },
    dataPath: "root.recommendation.seriesDoses[x]",
    parentDataPath: "root.recommendation",
    basePath: "root.seriesDoses[x]",
    baseId: "ImmunizationRecommendation.recommendation.seriesDoses[x]",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.seriesDosesPositiveInt.positiveInt",
      "root.recommendation.seriesDosesString.string",
    ],
    type: "positiveInt",
    value: "",
  },
  {
    element: {
      id: "positiveInt",
      path: "positiveInt",
      short: "Primitive Type positiveInt",
      definition: "An integer with a value that is positive (e.g. >0)",
      min: 0,
      max: "1",
      base: { path: "positiveInt", min: 0, max: "*" },
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human:
            "All FHIR elements must have a @value or children unless an empty Parameters resource",
          expression:
            "hasValue() or (children().count() > id.count()) or $this is Parameters",
          xpath: "@value|f:*|h:div|self::f:Parameters",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: false,
      type: [{ code: "positiveInt" }],
    },
    dataPath: "root.recommendation.seriesDosesPositiveInt.positiveInt",
    parentDataPath: "root.recommendation.seriesDoses[x]",
    basePath: "root.seriesDoses[x].positiveInt",
    baseId: "ImmunizationRecommendation.recommendation.seriesDoses[x]",
    isPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "string",
      path: "string",
      short: "Primitive Type string",
      definition: "A sequence of Unicode characters",
      comment: "Note that FHIR strings SHALL NOT exceed 1MB in size",
      min: 0,
      max: "1",
      base: { path: "string", min: 0, max: "*" },
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human:
            "All FHIR elements must have a @value or children unless an empty Parameters resource",
          expression:
            "hasValue() or (children().count() > id.count()) or $this is Parameters",
          xpath: "@value|f:*|h:div|self::f:Parameters",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: false,
      type: [{ code: "string" }],
    },
    dataPath: "root.recommendation.seriesDosesString.string",
    parentDataPath: "root.recommendation.seriesDoses[x]",
    basePath: "root.seriesDoses[x].string",
    baseId: "ImmunizationRecommendation.recommendation.seriesDoses[x]",
    isPrimitive: true,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.supportingImmunization",
      path: "ImmunizationRecommendation.recommendation.supportingImmunization",
      short: "Past immunizations supporting recommendation",
      definition:
        "Immunization event history and/or evaluation that supports the status and recommendation.",
      min: 0,
      max: "*",
      base: {
        path: "ImmunizationRecommendation.recommendation.supportingImmunization",
        min: 0,
        max: "*",
      },
      type: [
        {
          code: "Reference",
          targetProfile: [
            "http://hl7.org/fhir/StructureDefinition/Immunization",
            "http://hl7.org/fhir/StructureDefinition/ImmunizationEvaluation",
          ],
        },
      ],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "v2", map: "? No clear way to associate in HL7 v2 or IG" },
        {
          identity: "rim",
          map: '.outboundRelationship[typeCode=RSON].target[classCode=SBADM, moodCode=EVN, code="immunization"]',
        },
      ],
    },
    dataPath: "root.recommendation.supportingImmunization[0]",
    parentDataPath: "root.recommendation",
    basePath: "root.supportingImmunization",
    baseId: "ImmunizationRecommendation.recommendation.supportingImmunization",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.supportingImmunization[0].reference",
      "root.recommendation.supportingImmunization[0].type",
      "root.recommendation.supportingImmunization[0].display",
    ],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.recommendation.supportingImmunization[0].reference",
    parentDataPath: "root.recommendation.supportingImmunization[0]",
    basePath: "root.supportingImmunization.reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.recommendation.supportingImmunization[0].type",
    parentDataPath: "root.recommendation.supportingImmunization[0]",
    basePath: "root.supportingImmunization.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.recommendation.supportingImmunization[0].display",
    parentDataPath: "root.recommendation.supportingImmunization[0]",
    basePath: "root.supportingImmunization.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "ImmunizationRecommendation.recommendation.supportingPatientInformation",
      path: "ImmunizationRecommendation.recommendation.supportingPatientInformation",
      short: "Patient observations supporting recommendation",
      definition:
        "Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.",
      min: 0,
      max: "*",
      base: {
        path: "ImmunizationRecommendation.recommendation.supportingPatientInformation",
        min: 0,
        max: "*",
      },
      type: [
        {
          code: "Reference",
          targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
        },
      ],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      mustSupport: false,
      isModifier: false,
      isSummary: false,
      mapping: [
        { identity: "workflow", map: "Request.supportingInfo" },
        {
          identity: "v2",
          map: "OBX If OBX is associated with ( RXA : RXA-5-administered code = '998^No vaccine administered^CVX'), could contain the reason the vaccine was not administered",
        },
        {
          identity: "rim",
          map: ".outboundRelationship[typeCode=RSON].target[classCode=OBS, moodCode=EVN]",
        },
      ],
    },
    dataPath: "root.recommendation.supportingPatientInformation[0]",
    parentDataPath: "root.recommendation",
    basePath: "root.supportingPatientInformation",
    baseId:
      "ImmunizationRecommendation.recommendation.supportingPatientInformation",
    isPrimitive: false,
    childPaths: [
      "root.recommendation.supportingPatientInformation[0].reference",
      "root.recommendation.supportingPatientInformation[0].type",
      "root.recommendation.supportingPatientInformation[0].display",
    ],
    value: "",
  },
  {
    element: {
      id: "Reference.reference",
      path: "Reference.reference",
      short: "Literal reference, Relative, internal or absolute URL",
      definition:
        "A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.",
      comment:
        'Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.',
      min: 0,
      max: "1",
      base: { path: "Reference.reference", min: 0, max: "1" },
      type: [{ code: "string" }],
      condition: ["ref-1"],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.recommendation.supportingPatientInformation[0].reference",
    parentDataPath: "root.recommendation.supportingPatientInformation[0]",
    basePath: "root.supportingPatientInformation.reference",
    baseId: "Reference.reference",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.type",
      path: "Reference.type",
      short: 'Type the reference refers to (e.g. "Patient")',
      definition:
        'The expected type of the target of the reference. If both Reference.type and Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be consistent. The type is the Canonical URL of Resource Definition that is the type this reference refers to. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for logical models (and can only be used in references in logical models, not resources).',
      comment:
        "This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.",
      min: 0,
      max: "1",
      base: { path: "Reference.type", min: 0, max: "1" },
      type: [{ code: "uri" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      binding: {
        extension: [
          {
            url: "http://hl7.org/fhir/build/StructureDefinition/binding-definition",
            valueString:
              "Aa resource (or, for logical models, the URI of the logical model).",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName",
            valueString: "FHIRResourceTypeExt",
          },
          {
            url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-isCommonBinding",
            valueBoolean: true,
          },
        ],
        strength: "extensible",
        valueSet: "http://hl7.org/fhir/ValueSet/resource-types",
      },
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.recommendation.supportingPatientInformation[0].type",
    parentDataPath: "root.recommendation.supportingPatientInformation[0]",
    basePath: "root.supportingPatientInformation.type",
    baseId: "Reference.type",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
  {
    element: {
      id: "Reference.display",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
        {
          url: "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable",
          valueBoolean: true,
        },
      ],
      path: "Reference.display",
      short: "Text alternative for the resource",
      definition:
        "Plain text narrative that identifies the resource in addition to the resource reference.",
      comment:
        "This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.",
      min: 0,
      max: "1",
      base: { path: "Reference.display", min: 0, max: "1" },
      type: [{ code: "string" }],
      constraint: [
        {
          key: "ele-1",
          severity: "error",
          human: "All FHIR elements must have a @value or children",
          expression: "hasValue() or (children().count() > id.count())",
          xpath: "@value|f:*|h:div",
          source: "http://hl7.org/fhir/StructureDefinition/Element",
        },
      ],
      isModifier: false,
      isSummary: true,
      mapping: [{ identity: "rim", map: "N/A" }],
    },
    dataPath: "root.recommendation.supportingPatientInformation[0].display",
    parentDataPath: "root.recommendation.supportingPatientInformation[0]",
    basePath: "root.supportingPatientInformation.display",
    baseId: "Reference.display",
    isPrimitive: true,
    isRootPrimitive: false,
    childPaths: [],
    value: "",
  },
];
export default data;