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
        this.handleChange = this.handleChange.bind(this)
    }
componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(response => {
        const {memes} = response.data
        this.setState({allMemeImages: memes})
    })
    
}
handleChange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
}

render(){
    return (
        <div>
        <form className='flex content-center p-10'>
            <input 
            type='text'
            name='topText'
            placeholder='Top Text'
            value={this.state.topText} 
            onChange={this.handleChange}
            className='rounded-md border-4 border-pink-500'

            />
            <input 
            type='text'
            name='bottomText'
            placeholder='Bottom Text'
            value={this.state.bottomText} 
            onChange={this.handleChange}
            className='rounded-md border-4 border-pink-500'
            />

            <button className='rounded-md bg-pink-500 text-white font-bold px-8 py-1'> Gen </button>
        </form>

        </div>
            
        )
}
    
}


export default MemeGenerator