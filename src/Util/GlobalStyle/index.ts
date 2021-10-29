import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
 div,
a,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,form,p {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}
:root{
    --primary :     #27AE60;
    --secundary:    #EB5757;

    --success:      #168821;
    --negative :    #E60000;
    --warning:      #FFCD07;
    --information:  #155BCB;

    --gray-600: #333333;
    --gray-300: #828282;
    --gray-100:#E0E0E0;
    --gray-0:#F5F5F5;
    --gray-4: #BDBDBD;
    --gray-5: #999999;


}
body {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
.AlertDanger{
  color: var(--negative);
}

`;
 
export default GlobalStyle;