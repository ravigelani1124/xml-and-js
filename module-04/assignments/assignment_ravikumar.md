
1. Open `module-4/assignments/assignment.xml` in your editor
2. Create xsl file and add link to it
   Iamge: [image info](assignment_2.png)

3. Display catalog in the following way
   Image: [image info](assignment_3.png)

4. Display catalog in the following way

    - main title is "Catalog"
      Image: [image info](assignment_3_1.png)

    - use html list tag to display catalog
      Image: [image info](assignment_3_2.png)

    - render each item as `<article>` inside list item tag
      Image: [image info](assignment_3_3.png)

    - display product id as h3
    - display product description as paragraph
      Image: [image info](assignment_3_3-4.png)

    - render table of catalog items with columns: item number, price, gender, small, medium, large, extra large (if column item is not present in item, then display empty cell)
    - for gender column render M for Men, W for Women
      Image: [image info](assignment_5-6.png)

    - inside size columns (small, medium, large, and extra large) display subtable with 2 columns: color and image
      Image: [image info](assignemnt_3-7.png)

5. Thought process:

-   Here we have used tag <xsl:for-each> which used to render data while it is in list form. <xsl:if> is used to categorised the small, medium, large category. also we used some html tags like <h3> <ui> <ul>.
