
import React, { Component } from 'react'
import gql from 'graphql-tag'
import axios from 'axios';

class Links extends Component {
    constructor() {
        super();

        this.state = {
            loading: true
        }
    }
    componentWillMount() {
        axios({
            method: "POST",
            url: "http://localhost:4000/",
            data: {
                query: LINKS_QUERY
            }
        }).then((response) => {
            this.setState({
                loading: false,
                response: response.data.data
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.loading ?
                        "LOADING" :
                        (<div>
                            {this.state.response.links.map((link) => {
                                return <li>{link.title}</li>
                            })}
                        </div>)
                }
            </div>
        )
    }
}

// Let's build a graphql query
// The first line is what we want to call in here in the client.  Technically it's not needed
// The second line is the query we want to call on the server
// The third and on is the data we're getting back with which pieces we want
const LINKS_QUERY = gql`
  query linksQuery {
      links {
        id
        url
        description
      }
  }
`

// If we wrap our component like this it will auto run the query for us
// And put the results on props
export default Links