import styles from './Mini.module.scss';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const LeadScore = (props) => {
    return (
        <div className={`${styles.leadScoreContainer}`}>
            <Box sx={{position: 'relative', display: 'inline-flex'}} className={props?.className}>
                <CircularProgress variant="determinate" value={props.value} className="lead-score"/>
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary">
                        {props.value}
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}