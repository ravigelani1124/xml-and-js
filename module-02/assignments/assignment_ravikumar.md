1.  Open `module-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.

    1_a) <effective Date>03/12/2016</effective Date> this tag is not valid. the right tag is either <effectiveDate>03/12/2016</effectiveDate> or We can add 'date' as attribute such as <effective type = "Date">03122016</effective> this can save data as number formate.

    ![image info](/module-02/assignments/Answer1_a.png)

    1_b) In line 31 and 51<originalName> Fresh Mornin' Sampler </originalname> The opening and closing tag always be the same. here the opening tag is <originalName> but closing tag is not the same <originalname> the true solution is <originalName>...</originalName>. also in line <name> Oatmeal Breakfast </originalName> same issue. the right solution is <originalName> Oatmeal Breakfast </originalName>.

    ![image info](/module-02/assignments/Answer1_b.png)
    ![image info](/module-02/assignments/Answer1_c.png)

2.  What is the use of CDATA block in this document?

    Somedata that are not able to parsed by the parser for that we use the CDATA tag. Ex. &, <,>

3.  Add comment line to the end of file which contains you name and student id.

    ![image info](/module-02/assignments/Answer3.png)

4.  Identify prolog, document body, and epilog in the document. Are there any processing instructions?

    Prolog :- The prolog can always be the first line of the xml file. This is the prolog <?xml version="1.0" encoding="UTF-8" standalone="yes"?>

    ![image info](/module-02/assignments/Answer4_a.png)

    DocumentBody :- The xml file contain only one root element and all the content inside the root element is known as document body. Here everything inside the <menuInfo> tag is document body.

    ![image info](/module-02/assignments/Answer4_b.png)

    Epilog :- In xml file anything written outside the root tag is known as epilog. In the question 3 I have written the name and studentID at the end of the file outside the <menuInfo> tag is known as the epilog.

    ![image info](/module-02/assignments/Answer4_c.png)

5.  Add inline DTD for this document.

    ![image info](/module-02/assignments/Answer5.png)

6.  Verify that file is well-formed and valid.

    ![image info](/module-02/assignments/Answer6_a.png)
    ![image info](/module-02/assignments/Answer6_b.png)

7.  Create `style.css` file and link it to the file. Add the following styles to the .css:

-   Change font-size of `originalName`
-   Display each `category` on the new line
-   Add any other css-rule

    ![image info](/module-02/assignments/Answer7_a.png)
    ![image info](/module-02/assignments/Answer7_b.png)
