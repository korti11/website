<template>
    <b-row>
          <b-col>
              <span class="text-success">user@korti.io</span>: <span class="command-path">~<span v-if="$route.path !== '/'">{{$route.path}}</span></span>$ {{ command }}
              <a class="route" v-if="route" v-on:click="$router.push(route)">{{ parameter }}</a>
              <span v-else>{{ parameter }}</span>
          </b-col>
      </b-row>
</template>

<script>
export default {
    props: ['command', 'parameter','route']
}
</script>

<style>
    .command-path {
        color: steelblue;
    }
    a.route {
        cursor: pointer;
    }
</style>