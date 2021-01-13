class Youtube{
    constructor(key ){
        this.key = key;
        this.number = 3;
        this.requestionOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    async mostPopular(){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&locale=korea&maxResults=${this.number}&key=${this.key}`, this.requestOptions);
        const result = await response.json();
        return result.items;
    }

    async search(query){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${this.number}&q=${query}&type=video&key=${this.key}`, this.requestOptions);
        const result = await response.json();
        return result.items.map(item => ({...item, id:item.id.videoId}));
    }

    async relatedVideo(id){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${this.number}&relatedToVideoId=${id}&type=video&key=${this.key}&order=viewCount`, this.requestOptions);
        const result = await response.json();
        console.log(result);
        return result.items.map(item => ({...item, id:item.id.videoId}));
    }

    async getChannel(id){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${this.key}`, this.requestOptions);
        const result = await response.json();
        return result.items;
    }
}

export default Youtube;

