<template>
  <h1>Shows</h1>
</template>

<script setup lang="ts">
const API_KEY = 'AIzaSyCOxdYNqZiLBb-ieJ5GjpJy0ZXD2iuyM7U';
const CALENDAR_ID = 'madhusudhan.vinta@gmail.com';

const today = new Date();

const { data, error } = await useFetch(
  `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
  {
    params: {
      eventTypes: 'default',
      key: API_KEY,
    },
  }
);

console.log(data.value, error);
</script>
