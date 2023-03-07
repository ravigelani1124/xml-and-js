<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
   <xsl:template match="/">
      <html>
        <head>
                <link rel="stylesheet" href="stockmarket.css"/>
            </head>
         <body>
            <h2>Stock Data Using XML</h2>
            <table id="data">
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Currency</th>
                  <th>Address</th>
                  <th>Stocks</th>
                  <th>Accounts</th>
               </tr>
               <xsl:for-each select="base/data">
                  <tr valign="top" height="1">
                     <td valign="top" height="1">
                        <xsl:value-of select="id" />
                     </td>
                     <td valign="top" height="1">
                        <xsl:value-of select="name" />
                     </td>
                     <td>
                        <xsl:value-of select="currency" />
                     </td>
                     <td valign="top" height="1">
                        <xsl:value-of select="address/street" />
                        <br />
                        <xsl:value-of select="address/city" />
                        <br />
                        <xsl:value-of select="address/region" />
                        <br />
                        <xsl:value-of select="address/country" />
                     </td>
                     <td>
                        <table id="data">
                           <tr>
                              <th>Symbol</th>
                              <th>Name</th>
                              <th>Sector</th>
                              <th>Industry</th>
                              <th>Market Cap</th>
                              <th>Price</th>
                           </tr>
                           <xsl:for-each select="stocks">
                              <tr>
                                 <td>
                                    <xsl:value-of select="symbol" />
                                 </td>
                                 <td>
                                    <xsl:value-of select="name" />
                                 </td>
                                 <td>
                                    <xsl:value-of select="sector" />
                                 </td>
                                 <td>
                                    <xsl:value-of select="industry" />
                                 </td>
                                 <td>
                                    <xsl:value-of select="marketCap" />
                                 </td>
                                 <td>
                                    <xsl:value-of select="price" />
                                 </td>
                              </tr>
                           </xsl:for-each>
                        </table>
                     </td>
                     <td>
                        <table id="data">
                           <tr valign="top" height="1">
                              <th>Name</th>
                              <th>Gender</th>
                              <th>Occupation</th>
                              <th>IBAN</th>
                           </tr>
                           <xsl:for-each select="accounts">
                              <tr >
                                 <td>
                                  <xsl:value-of select="concat(holder/firstName,' ',holder/lastName)"/>                                  
                                 </td>                                 
                                 <td>
                                    <xsl:value-of select="holder/gender" />
                                 </td>
                                 <td>
                                    <xsl:value-of select="holder/occupation" />
                                 </td>
                                 <td>
                                    <xsl:value-of select="bank/iban" />
                                 </td>
                              </tr>
                           </xsl:for-each>
                        </table>
                     </td>
                  </tr>
               </xsl:for-each>
            </table>
         </body>
      </html>
   </xsl:template>
</xsl:stylesheet>