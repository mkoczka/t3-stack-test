import React, { useEffect, useRef, useState } from "react";
// import EditorJS from "@editorjs/editorjs";
import { createReactEditorJS } from "react-editor-js";

const DocumentationEditor = () => {
  // useEffect(() => {
  //   new EditorJS({
  //     /**
  //      * Id of Element that should contain the Editor
  //      */
  //     holder: "editor-js",

  //     /**
  //      * Available Tools list.
  //      * Pass Tool's class or Settings object for each Tool you want to use
  //      */
  //     tools: {},

  //     /**
  //      * Previously saved data that should be rendered
  //      */
  //     data: {
  //       time: 1635603431943,
  //       blocks: [
  //         {
  //           id: "12iM3lqzcm",
  //           type: "paragraph",
  //           data: {
  //             text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
  //           },
  //         },
  //       ],
  //     },

  //     initialBlock: "paragraph",
  //   });
  // });

  // return <div id="editor-js"></div>;

  const ReactEditorJS = createReactEditorJS();

  return (
    <div>
      <ReactEditorJS minHeight={100} />
    </div>
  );
};

export default DocumentationEditor;
