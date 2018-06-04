// write code here and click the execute button
const Card = (props) => {
    return ( <
        div style = {
            {
                margin: '1em'
            }
        } >
        <
        img width = "100"
        src = {
            props.avatar_url
        }
        />  <
        div style = {
            {
                display: 'inline-block',
                marginleft: 10
            }
        } >
        <
        div style = {
            {
                fontSize: '1.25em',
                fontWeigth: 'bold'
            }
        } > {
            props.name
        } < /div>  <
        div > {
            props.company
        } < /div > < /div >


        <
        /div>



    );



}


const CardList = (props) => {

        return ( < div > {
                    props.cards.map(card => < Card key = {
                            card.id
                        } { ...card
                        }
                        />)} < /div >
                    );

                }


                class Form extends React.Component {
                    state = {
                        userName: ''
                    }
                    handleSubmit = (event) => {
                        event.preventDefault();
                        //ajax call(fetch or axios)
                        axios.get(`https://api.github.com/users/${this.state.userName}`).then(
                            resp => {
                                this.props.onSubmit(resp.data);
                                //console.log(resp);

                            })


                        //console.log('Event: form Submit',this.state.userName);
                    };
                    render() {
                        return ( < form onSubmit = {
                                this.handleSubmit
                            } >

                            <
                            input type = "text"
                            value = {
                                this.state.userName
                            }

                            onChange = {
                                (event) => this.setState({
                                    userName: event.target.value
                                })
                            }
                            />

                            <
                            button type = "submit" > Add card < /button> 


                            <
                            /form>
                        );
                    };
                };

                // ref={(input) => this.UserInput=input} instead of using the ref we use the react controlled components like we did above
                // so we create a parent class to display both the card and input form instaed of mixing it in he card component as it is a Event function we create a Stateful Component

                class App extends React.Component {
                    state = {
                        cards: []


                    };

                    addNewCard = (cardInfo) => {

                        this.setState(prevState => ({
                            cards: prevState.cards.concat(cardInfo)
                        }));
                    }


                    render() {
                        return ( < div >
                            <
                            Form onSubmit = {
                                this.addNewCard
                            }
                            /> < CardList cards = { this.state.cards } / >

                            <
                            /div>


                        );
                    }



                }

                ReactDOM.render( < App / > , document.querySelector('.container'));

								//		axios.get('http://finance.google.com/finance/info?client=ig&q=NASDAQ%3AGOOG',{headers: {'X-Custom-Header': 'foobar'}})
//  				.then(function (response) {
//    				console.log(response);
//  		})
//  				.catch(function (error) {
//    				console.log(error);
//  		});

//		const instance = axios.create({
//							baseURL: 'http://finance.google.com/',
//							responseType: 'json',
//							headers: {
//										'Accept': 'application/json',
//										'Content-Type': 'application/json',
//										'Authorization': 'test',
//										'X-Test': 'testing'
//									}});
//		axios.get('http://finance.google.com/finance/info?client=ig&q=NASDAQ%3AGOOG')
//				.then(function (response) {
//				console.log(response);
//				})
//				.catch(function (error){
//					console.log(error);
//		});
		
//    const axiosVic = {	method: 'get',
//						url: 'http://finance.google.com/finance/info?client=ig&q=NASDAQ%3AGOOG',
//						headers: {'X-Requested-With': 'XMLHttpRequest'},
//						responseType: 'json',
//						withCredentials: true};
//	axios.get('http://finance.google.com/finance/info?client=ig&q=NASDAQ%3AGOOG', axiosVic)
//    .then(function (response) {
//        console.log(response.data);
//});	
//
//    axios.request(axiosVic)
//      .then(response => { console.log('response: ', response) });
//
//  }

								
								