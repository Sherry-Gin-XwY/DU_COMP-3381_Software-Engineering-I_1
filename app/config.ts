const baseUrl = "https://workflower.herokuapp.com";
const Config = {
    baseUrl,
    getUrl:function(url:string){
        return this.baseUrl+url;
    }
}
export default Config;