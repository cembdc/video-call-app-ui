import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

import styles from 'assets/jss/material-kit-react/views/loginPage.js';

import image from 'assets/img/bg7.jpg';

import { withTranslation } from 'react-i18next';
import { withSnackbar } from 'notistack';

const useStyles = makeStyles(styles);

const getUsers = async props => {
    // props.enqueueSnackbar(process.env.REACT_APP_API_URL, {
    //     variant: 'info'
    // });

    try {
        let req = await fetch(`${process.env.REACT_APP_API_URL}user/`);
        let result = await req.json();
        props.enqueueSnackbar(result.data[0].userName, {
            variant: 'success'
        });
    } catch (error) {
        props.enqueueSnackbar('Hata: ' + error, {
            variant: 'error'
        });
    }
};

const LoginPage = props => {
    const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
    setTimeout(function() {
        setCardAnimation('');
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="Material Kit React"
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: 'url(' + image + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center'
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form}>
                                    <CardHeader
                                        color="primary"
                                        className={classes.cardHeader}
                                    >
                                        <h4>{rest.t('Login')}</h4>
                                        <div className={classes.socialLine}>
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={e =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <i
                                                    className={'fab fa-twitter'}
                                                />
                                            </Button>
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={e =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <i
                                                    className={
                                                        'fab fa-facebook'
                                                    }
                                                />
                                            </Button>
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={e =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <i
                                                    className={
                                                        'fab fa-google-plus-g'
                                                    }
                                                />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <CustomInput
                                            labelText="Email..."
                                            id="email"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: 'email',
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email
                                                            className={
                                                                classes.inputIconsColor
                                                            }
                                                        />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            id="pass"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: 'password',
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Icon
                                                            className={
                                                                classes.inputIconsColor
                                                            }
                                                        >
                                                            lock_outline
                                                        </Icon>
                                                    </InputAdornment>
                                                ),
                                                autoComplete: 'off'
                                            }}
                                        />
                                        <Button
                                            simple
                                            fullWidth
                                            color="primary"
                                            size="sm"
                                            onClick={() =>
                                                rest.history.push(
                                                    '/signin-page'
                                                )
                                            }
                                        >
                                            {rest.t('IsMember')}
                                        </Button>
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button
                                            color="primary"
                                            size="lg"
                                            fullWidth
                                            // onClick={() =>
                                            //     rest.enqueueSnackbar(
                                            //         'Successfully fetched the data.',
                                            //         { variant: 'success' }
                                            //     )
                                            // }
                                            onClick={() => getUsers(rest)}
                                        >
                                            {rest.t('Login')}
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
};

export default withTranslation()(withSnackbar(LoginPage));
