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
        this.handleSubmit = this.handleSubmit.bind(this)
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

handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() *this.state.allMemeImages.length)
    const randMemeImage = this.state.allMemeImages[randNum].url 
    this.setState({
        randomImage: randMemeImage
    })

}

render(){
    return (
        <div>
        <form className='flex content-center p-10'
        onSubmit={this.handleSubmit}
        >
            <input 
            type='text'
            name='topText'
            placeholder='Top Text'
            value={this.state.topText} 
            onChange={this.handleChange}
            className='rounded-md border-4 border-pink-500 text-lg'

            />
            <input 
            type='text'
            name='bottomText'
            placeholder='Bottom Text'
            value={this.state.bottomText} 
            onChange={this.handleChange}
            className='rounded-md border-4 border-pink-500 text-lg'
            />

            <button 
            className='rounded-md bg-pink-500 text-white font-bold px-8 py-1 text-xl'
            on
            > Gen 
            </button>
        </form>
        <div className='meme'>
            <img src={this.state.randomImage} alt=''/>
            <h2 className='absolute inset-x-0 top-0'>{this.state.topText}</h2>
            <h2 className='absolute bottom-0'>{this.state.bottomText}</h2>
        </div>

        </div>
            
        )
}
    
}


export default MemeGenerator