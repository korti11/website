<template>
    <b-row>
          <b-col>
              <span class="text-success">user@korti.io</span>: <span class="command-path">~<span v-if="$route.path !== '/'">{{$route.path}}</span></span>$ {{ command }}
          </b-col>
      </b-row>
</template>

<script>
export default {
    props: ['command']
}
</script>

<style>
    .command-path {
        color: steelblue;
    }
</style>