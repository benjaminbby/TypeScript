/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
// @noUnusedParameters: true
//// var x : {
////     [|new <T, U>(a: T): void;|]
//// }

verify.codeFixAtPosition("new <T>(a: T): void;");
