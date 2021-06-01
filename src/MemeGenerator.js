import React, {Component} from 'react';

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImages: []
        }
    }
componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(response => {
        const {memes} = response.data
        console.log(memes[0])
        this.setState({allMemeImages: memes})
    })
    
}

render(){
    return (
            <h1>I will generate memes</h1>
        )
}
    
}


export default MemeGenerator