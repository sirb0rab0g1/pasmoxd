<template>
  <v-container fluid>
    {{ messages }}

    <v-text-field v-model="msg" />
    <v-btn @click="send()">SEND</v-btn>
  </v-container>
</template>

<script>
  /* eslint-disable */
  import axios from 'axios'

  export default {
    data: () => ({
      messages: null,
      msg: ''
    }),
    sockets: {
        connect: function () {
            console.log('socket connected')
        },
        customEmit: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
    },
    methods: {
      send () {
        axios.post('http://192.168.0.199:8000/api/post', {message: this.msg}).then(data => {
          console.log(data)
        }).catch(data => {
          console.log(data)
        })
      }
    },
    created() {
      /* axios.get('http://192.168.0.199:8000/api/getAll').then(({data}) => {
          this.messages = data;
      });
      // Registered client on public channel to listen to MessageSent event
      Echo.channel('channel-name').listen('MessageSent', ({message}) => {
          // this.messages.push(message);
          console.log('xd')
      }); */
    }
  }
</script>
