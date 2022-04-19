import * as Filepond from "filepond";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

Filepond.registerPlugin(FilePondPluginFileValidateSize);
Filepond.registerPlugin(FilePondPluginFileValidateType);

Filepond.create(document.body, {
  // =============== //
  // filepond issues //
  // =============== //

  // 1)
  // PROBLEM: field does not appear in types
  storeAsFile: true,

  // 2)
  // PROBLEM: field does not appear in types
  credits: false,

  // ========================================= //
  // filepond-plugin-file-validate-size issues //
  // ========================================= //

  // 3)
  // PROBLEM: field does not appear in types
  minFileSize: "5MB",

  // ========================================= //
  // filepond-plugin-file-validate-type issues //
  // ========================================= //

  // 4)
  // PROBLEM: `file` is of type `FilePondFile`, not of native JS type `File`
  fileValidateTypeDetectType: async (file) => {
    // `name` property exists on native JS File type. TypeScript will complain that `file` does not
    // have a `name` property, but at runtime this property will be populated
    console.log(file.name);

    // `fileType` property exists on FilePondFile type. TypeScript will claim that `file` does have
    // a `fileType` property, but at runtime this property will be undefined
    console.log(file.fileType);

    return "";
  }
});
