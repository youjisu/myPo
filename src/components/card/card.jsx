import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const theme = createTheme({
    typography: {
    }
});

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const RecipeReviewCard = ({ img, title, date, prevTitle, prevContent, mainContent }) => {
    const [favorite, setFavorite] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 320, maxWidth: 600, width: '100%', mb: 2, position: 'relative' }} >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
                            Js
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={title}
                    subheader={date}
                />
                <CardMedia
                    component="img"
                    image={img}
                    height="250"
                    alt="Paella dish"
                    sx={{ clipPath: 'polygon(0px 0px, 100% 0%, 100% 75%, 0% 100%)' }}
                />
                <CardContent>
                    <Typography sx={{ position: 'absolute', top: 300, right: 15, fontWeight: 'bold', borderBottom: 1 }}>
                        {prevTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ whiteSpace: 'pre-wrap' }}>
                        {prevContent}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" onClick={() => { setFavorite(!favorite); }}>
                        <FavoriteIcon style={{ color: favorite && 'red' }} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph style={{ whiteSpace: 'pre-wrap' }}>
                            {mainContent}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </ThemeProvider>
    );
}
RecipeReviewCard.defaultProps = {
    img: 'https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2229&q=80',
    title: '몰?루',
    date: (new Date()).toISOString().substring(0, 10),
    prevTitle: '키득키득',
    prevContent: '호호호호',
    mainContent: '으히히히'
}

export default RecipeReviewCard;
