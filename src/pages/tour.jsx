import { Typography } from "@mui/material";
import  Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import QuiltedImageList from "../component/ImageList";
import CoustomizedAccordians from '../component/Accordian.jsx';


const Tour =() => (
<Container sx={{ width: 900}}>
<Typography variant="h3" component="h1" marginTop={3}>
   Explore the world in Vegas 
</Typography>
<Box marginTop={3} sx={{display:"flex"}}>

<img src="https://footwearnews.com/wp-content/uploads/2020/10/magic-trade-show-las-vegas.jpg" alt="" 
height={325}/>
<QuiltedImageList/>
</Box>
<Box>
<Typography variant="6" component="h4" marginTop={3}>
   About this ticket
</Typography> 
<Typography variant="paragraph" component="p" marginTop={3}>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate eveniet facilis unde. Odio dolorum voluptas voluptatibus eos dolore ipsa voluptates vitae eveniet beatae. Quis sit esse error facere aspernatur dolorum, consectetur quia magnam obcaecati, cum illo itaque voluptatem culpa!
</Typography> 
</Box>
<Box>
<Typography variant="6" component="h4" marginTop={3}>
   Frequently Asked Questions
</Typography> 
<CoustomizedAccordians></CoustomizedAccordians>
</Box>
</Container>
)
export default Tour;

