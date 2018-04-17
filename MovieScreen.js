import React from 'react';
import { Text, View, StyleSheet, StatusBar, Animated, Image, ScrollView } from 'react-native';
import Shimmer from '../components/Shimmer';
import axios from 'axios';
import AppConstant from '../constants/AppConstants';
const URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=<YOUR_API_KEY>&page=1'

class MovieScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            movieData: []
        }
    }

    getMovieDetails() {
        return axios.get(URL_DISCOVER)
    }

    componentDidMount() {
        this.getMovieDetails().then((result) => {
            let results = result.data.results;
            let movieArray = [];
            results.forEach((value) => {
                let movie = {
                    title: value.title,
                    rating: value.vote_average,
                    poster: 'https://image.tmdb.org/t/p/w185' + value.poster_path
                }
                movieArray.push(movie)
            })

            this.setState({
                movieData: movieArray
            })
        })
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                isVisible: true
            })
        }, 5000)
    }

    render() {
        console.log('state', this.state.movieData)
        const { navigate } = this.props.navigation;

        return (

            <ScrollView style={styles.container}>
                {
                    this.state.movieData.map((value, index) => {
                        const uri = value.poster;
                        return (<View style={styles.imageContent} key={index}>
                            <Shimmer autoRun={true} style={styles.imagew} visible={this.state.isVisible}>
                                <Image style={styles.imagew}
                                    source={{ uri: uri }}></Image>
                            </Shimmer>
                            <View style={styles.movieContent}>
                                <Shimmer autoRun={true} visible={this.state.isVisible}>
                                    <Text>{value.title}</Text>
                                </Shimmer>
                                <Shimmer autoRun={true} visible={this.state.isVisible}>
                                    <Text>{value.rating}</Text>
                                </Shimmer>
                            </View>
                        </View>)
                    })
                }

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContent: {
        flexDirection: 'row',
        margin: 16
    },
    movieContent: {
        margin: 8,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    imagew: {
        width: 80,
        height: 80
    },
    mcontent: {
        marginTop: 8,
        marginBottom: 8
    }
})

export default MovieScreen;
