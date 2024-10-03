import React from 'react';





function App()
{
    
    return(
        <>
        <label for="validationCustom03" class="form-label">Label</label>
        <input type="text" class="form-control" id="validationCustom03" required/>
        <button type="button" class="btn btn-success">Change Text</button>

        </>

    );
}
export default App;


// Points to Remember:
    // 1. For logical elements, use '{}'.  e.g. let x=10; inside our html body write {x}

    // 2. For InlineCss, use '{{}}'. e.g. <body style={{backgroundColor: "whitesmoke"}}>

    // 3. For external CSS, use the 'import' statement. Example:
        // import './styles.css';
        // Note: No need to use an alias for CSS imports as it is not used as a variable.

    // 4. Closing tags are compulsory. Example:
        // Use <br /> instead of <br>.

    // 5. Link Bootstrap by adding the 4 links in the ./public/index.html's <head> section

    // 6. To call Components, first import them using an alias, then use that alias in the return statement as a self-closing tag. eg
        // import AliasForComponent from './TaskNameFolder/component-name';
        // return( <AliasForFunctionName /> );

    // 7. The opening curved bracket must always be on the same line as the return keyword, otherwise the react page on the browser will show a blank page.

    // 8. Use PascalCase for component names, e.g. ComponentName

    // 9. Use React Fragment to wrap multiple elements in a single parent without adding extra nodes to the DOM. 
    // i.e either use this <React.Fragment>...</React.Fragment> or this <>...</> for enclosing

    // 10. Never rename a file name after creating it.
