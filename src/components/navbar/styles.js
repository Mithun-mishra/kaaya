// export const styles={
    
//     container:{
//         marginTop:"2rem",
//         minHeight:"3rem",
//         backgroundColor:"rgba(223,158,201,1)",
//         display:"flex",
//         justifycontent: "center", /* Center content horizontally */
//     alignitems: "center", 
//     },
//     middlediv: {
//         // display: "flex",
//         // justifyContent: "center",
//         // alignitems: "center"
//          /* Adjust the height as needed */
//          marginright:"4rem"
//       },
      
//     horizontalList: {
//         listStyle: "none",
//         display: "flex",
//         padding: "0", /* Remove default padding */
//         margin: "0",
//         marginright: "20px", /* Remove default margin */
//       },
//       horizontalListLi:{
//         padding:"2rem"
//       },
//       leftdiv:{
        
//         color:"white"
//       },
//       rightdiv:{
       
//         alignitems:"right"
//       }
      
      
// }
export const styles = {
  container: {
    minHeight:"3rem",
   
    display: 'flex',
    alignItems: 'center',
    backgroundColor:"rgba(223,158,201,1)",
    justifyContent: 'space-between', // To align the left, center, and right divs

  },
  leftdiv: {
    flex: 1, // To make the left div take available space
  },
  middlediv: {
    
    flex: 2, // To make the middle div take twice the space of the left and right divs
    textAlign: 'center', // To center the text inside the middle div horizontally
  },
  horizontalList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex', // Display the list items horizontally
    justifyContent: 'center', // Center the items horizontally
  },
  horizontalListLi: {
    cursor:"pointer",
    margin: '0 10px',
    padding: '5px 10px', // Add padding to the list items
  },
  rightdiv: {
    marginRight:"4rem",
    flex: 1, // To make the right div take available space
    textAlign: 'right', // To align its content to the right
    display: 'flex',
    justifyContent: 'flex-end', // To align the icons to the right within the right div
  },
  iconContainer: {
    padding: '8px', // Add padding to the icon container
  },
  icon: {
    fontSize: '24px',
    cursor:"pointer" // Adjust the icon size as needed
  },
};