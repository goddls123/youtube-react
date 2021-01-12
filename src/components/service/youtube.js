class Youtube{
    constructor(key ){
        this.key = key;
        this.requestionOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    async mostPopular(){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&locale=korea&maxResults=25&key=${this.key}`, this.requestOptions);
        const result = await response.json();
        return result.items;
    }

    async search(query){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`, this.requestOptions);
        const result = await response.json();
        return result.items
    }

    async getChannel(id){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${this.key}`, this.requestOptions);
        const result = await response.json();
        return result
    }
}

export default Youtube;

