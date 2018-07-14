const httpModule = require("http");
module.exports = {
    methods: {
        check: function() {
            console.log("Check for data");
            console.log(this.$user_id.val);
        },
        load: function() {
            console.log("Load question");
            httpModule.request({
                url: this.apiUrl,
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then((response) => {
                const result = response.content.toJSON();
                console.log(result);
                this.$question_list = [];
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

            }, (e) => {
                console.log(e);
            });
        },
    },
    data() {
        return {
            apiUrl: "http://140.114.79.86:8000/api/questions/",
        };
    },
    template: `
    <Page @loaded="load()">
      <ActionBar :title="$route.path" />
      <StackLayout>
        <Button text="Register" @tap="$router.push('/register')" />
        <Button text="Login" @tap="$router.push('/login')" />
        <Button text="Check" @tap="check()" />
        <Button text="Profile"        v-if="this.$user_id.val != '0'" @tap="$router.push('/profile')" />
        <Button text="Change"         v-if="this.$user_id.val != '0'" @tap="$router.push('/change')" />
        <Button text="Ask Question"   v-if="this.$user_id.val != '0'" @tap="$router.push('/question')" />
        <Button text="Question List"   @tap="$router.push('/questionlist')" />
        <Button text="User List"   @tap="$router.push('/userlist')" />
      </StackLayout>
    </Page>
  `
};