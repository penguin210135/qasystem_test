const httpModule = require("http");
module.exports = {
    data() {
        return {
            apiUrl:  "http://140.114.79.86:8000/accounts/api/users/register/",
            Email: "123@example.com",
            AccountText: "Nametmp",
            PasswordText: "Pwdtmp",
            item: {},
        }
    },
    methods: {
        register: function () {
            
            httpModule.request({
                url: this.apiUrl,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({
                    email: this.Email,
                    username: this.AccountText,
                    password: this.PasswordText
                })
            }).then((response) => {
                console.log("Register Successfully!");
                console.log(response);
                //console.log(response.content.toJson.prototype);
            }, (e) => {
                console.log("response: " + e);
            });
            
            this.$router.go(-1);
        },
    },
    template: `
      <Page>
        <ActionBar :title="$route.path">
          <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
        </ActionBar>
        <StackLayout>
            <Label :text="Register" />
            <TextField v-model="AccountText" hint="Enter Account..." />
            <TextField v-model="PasswordText" hint="Enter Password..." />
            <Button text="Submit" @tap="register()" />
            <Button text="Back" @tap="$router.go(-1)" />
        </StackLayout>
      </Page>
    `
};