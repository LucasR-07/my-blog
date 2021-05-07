<template>
  <div class="mt-3">
    <b-card :title="post.title" :sub-title="post.slug">
      <b-card-text>
        {{ post.content }}
      </b-card-text>

      <b-card-text>{{ algo }}</b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: ['post'],
  data() {
    return {
      algo: 'lorem soy un texto'
    }
  },
}
</script>