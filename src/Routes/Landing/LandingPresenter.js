import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, Button} from '@material-ui/core';
import coffee from "../../Imgs/coffee.jpg";

const useStyles = makeStyles((theme) => ({
    paper: {
        height: "60vh",
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default ({code, name}) => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <img src={coffee} />
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField 
                            name="text"
                            variant="outlined"
                            required
                            fullWidth
                            id="code"
                            label="코드번호"
                            autoFocus
                            {...code}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="text"
                            variant="outlined"
                            required
                            fullWidth
                            id="name"
                            label="이름"
                            autoFocus
                            {...name}
                        />
                    </Grid>
                </Grid>
                <Button fullWidth className={classes.submit} variant="contained" color="primary">
                    링크 만들기
                </Button>
            </div>
        </Container>
        )
}