const httpModule = require("http");
module.exports = {
    data() {
        return {
            apiUrl: "http://140.114.79.86:8000/api/questions/",
            questionlist: [],
            //{name: xxx}
        }
    },
    methods: {
        load: function() {
            console.log("Load question");
            httpModule.request({
                url: this.apiUrl,
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then((response) => {
                const result = response.content.toJSON();
                console.log(result[0]);
                //this.$question_list = [];
                this.$question_num = result.length;

                for (var i = this.$question_list.length; i < this.$question_num; i++) {
                    console.log(result[i]);
                    var tmp_data = {
                        title: result[i].title,
                        qid: result[i].question_id,
                        uid: result[i].user_id
                    };
                    this.$question_list.push(tmp_data);
                }
                this.questionlist = this.$question_list;
                console.log(this.$question_list);
                console.log(this.questionlist);
            }, (e) => {
                console.log(e);
            });
        },
        onItemTap: function(args) {
            console.log(args.item.qid);
            this.$question_cur_link.val = args.item.qid.toString();
            console.log(this.$question_cur_link.val);
            this.$router.push('/showquestion');
        }
    },
    template: `
    <Page @loaded="load()">
        <ActionBar :title="$route.path">
            <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.go(-1);" />
        </ActionBar>
        <StackLayout>
            <ListView class="list-group" for="question in $question_list" @itemTap="onItemTap" style="height:1250px">
                <v-template>
                    <FlexboxLayout flexDirection="row" class="list-group-item">
                    <Label :text="question.title" class="list-group-item-heading" style="width: 60%" />
                    </FlexboxLayout>
                </v-template>
            </ListView>    
        </StackLayout>
    </Page>
  `
};