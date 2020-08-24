<template>
    <b-row>
          <b-col>
              <span class="text-success">user@korti.io</span>: <span class="text-primary">~</span>$ {{ command }}
          </b-col>
      </b-row>
</template>

<script>
export default {
    props: ['command']
}
</script>