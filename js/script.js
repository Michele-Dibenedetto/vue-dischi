var app = new Vue({
    el: "#root",
    data: {
        posters: [],
        genres: [],
        genreActive: "all",
        genreActiveall: true
    },
    mounted: function() {
        for (let i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((result) => {
                console.log(result);
                this.posters.push(result.data.response[i]);
                if (!this.genres.includes(result.data.response[i].genre)) {
                    this.genres.push(result.data.response[i].genre);
                }
                // console.log(this.posters)
                // console.log(result.data.response[1].poster)
            })
        }
    },
    methods: {
        show() {
            console.log(document.getElementById("filter_genre").value);
            this.genreActive = document.getElementById("filter_genre").value;
            if (document.getElementById("filter_genre").value == "all") {
                this.genreActiveall = true;
            } else {
                this.genreActiveall = false;
            }
        }
    }
}) 