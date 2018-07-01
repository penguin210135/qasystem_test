const httpModule = require("http");
module.exports = {
    data() {
        return {
            apiUrl: "http://140.114.79.86:8000/accounts/api/users/post_question/",
            TitleText: "",
            QuestionText: "",
            category: ["C++", "Python", "JavaScript"],
            wantedtime: [1, 2, 4, 8, 16],
            selectCategory: number = 0,
            selectTime: number = 0,
        }
    },
    methods: {
        sendQuestion() {
            if (this.$user_id.val != "0") {
                console.log("Send the question!!");
                var time = new Date();
                console.log(this.TitleText + " : " + this.QuestionText);
                let year = time.getFullYear();
                let month = time.getMonth();
                let day = time.getDate();
                let hour = time.getHours();
                let minute = time.getMinutes();
                let sec = time.getSeconds();
                console.log("Time stamp : ");
                console.log(year + "/" + month + "/" + day);
                console.log(hour + ":" + minute + ":" + sec);
                console.log("Expertise : " + this.category[this.selectCategory.number])

                httpModule.request({
                    url: this.apiUrl,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({
                        key: this.$user_id.val,
                        title: this.TitleText,
                        content: this.QuestionText,
                        hashtags: ["test", this.category[this.selectCategory.number]]
                    })
                }).then((response) => {
                    const result = response.content.toJSON();
                    if (response.statusCode == 200 || response.statusCode == 202) {
                        console.log("Post question Success!!");
                        console.log(result);
                        this.$router.go(-1);
                    } else {
                        console.log(result);
                    }
                    //console.log(response.content.toJson.prototype);
                }, (e) => {
                    console.log(e);
                });

            } else {
                console.log("You haven't login!");
            }


        },
    },

    template: `
    <Page>
    <ActionBar :title="$route.path">
        <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
    </ActionBar>
    <ScrollView>
        <StackLayout >
            <Span text="Title : \n" row="1"/>
            <TextField v-model="TitleText" hint="Enter the title" row="2"/>
            <Span text="Description : \n" row="3" />
            <TextField v-model="QuestionText" hint="Describe the quesion" row="4"/>
    
            <Span text="Category : \n"/>
            <ListPicker :items="category" v-model="selectCategory" />        
            <Button text="submit" @tap="sendQuestion()" />                  
                
        </StackLayout>
    </ScrollView>
      
    </Page>
  `
};

/*
<StackLayout >
<Span text="Wanted replay time : \n" />
<ListPicker :items="wantedtime" v-model="selectTime"/>              
</StackLayout>
*/