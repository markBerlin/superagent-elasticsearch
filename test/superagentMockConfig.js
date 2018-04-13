module.exports = [
    {
        /**
         * regular expression of URL
         */
        pattern: 'https://www.myeslastic.com:1234(.*)',

        /**
         * returns the data
         *
         * @param match array Result of the resolution of the regular expression
         * @param params object sent by 'send' function
         * @param headers object set by 'set' function
         * @param context object the context of running the fixtures function
         */
        fixtures: function (match, params, headers, context) {
            const path = match[1];
            return {
                path,
                params,
                headers
            }
        },

        /**
         * returns the result of the GET request
         *
         * @param match array Result of the resolution of the regular expression
         * @param data  mixed Data returns by `fixtures` attribute
         */
        get: function (match, data) {
            const ret = {...data, type: 'get'};
            return {
                text: JSON.stringify(ret),
                body: ret
            };
        },

        /**
         * returns the result of the POST request
         *
         * @param match array Result of the resolution of the regular expression
         * @param data  mixed Data returns by `fixtures` attribute
         */
        post: function (match, data) {
            const ret = {...data, type: 'post'};
            return {
                text: JSON.stringify(ret),
                body: ret
            };
        }
    }
];
