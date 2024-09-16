<template>
  <div class="w-full mx-auto" v-if="events?.length > 0">
    <div class="bg-black shadow-lg overflow-y-hidden relative overflow-x-scroll">
      <div
        class="px-2 xs:px-4 py-3 bg-primary sticky top-0 left-0 w-full flex justify-between items-center">
        <button
          @click="previousMonth"
          class="bg-black text-white px-2 whitespace-nowrap text-xs xs:text-sm xs:px-4 rounded-full py-1">
          <Icon name="heroicons-solid:chevron-left" />
          Previous
        </button>
        <h2 class="text-sm font-bold text-black xs:text-lg uppercase">
          {{ currentMonthName }} {{ currentYear }}
        </h2>
        <button
          @click="nextMonth"
          class="bg-black text-white px-2 whitespace-nowrap text-xs xs:text-sm xs:px-4 rounded-full py-1">
          Next <Icon name="heroicons-solid:chevron-right" />
        </button>
      </div>
      <div class="grid grid-cols-7 gap-[1px] bg-gray-800 min-w-[1024px]">
        <!-- Days of the Week -->
        <div
          v-for="day in daysOfWeek"
          :key="day"
          class="bg-black font-semibold text-white p-2 text-center">
          {{ day }}
        </div>

        <!-- Empty boxes for previous month days -->
        <div v-for="n in firstDayOfMonth" :key="n" class="h-32 bg-black/50"></div>

        <!-- Days of the current month -->
        <div v-for="day in daysInMonth" :key="day" class="h-32 bg-black p-3">
          <div class="font-bold text-white h-4 mb-2">{{ day }}</div>
          <!-- Display events for the day -->
          <div class="h-20 overflow-y-scroll">
            <div
              v-for="event in getEventsForDay(day)"
              :key="event.id"
              class="bg-primary text-xs font-medium px-3 py-2 mt-1 rounded-md">
              <div>{{ (event.start.dateTime as Date).toLocaleString().slice(11, 16) }}</div>
              <div class="text-sm">{{ event.summary }}</div>
            </div>
          </div>
        </div>

        <!-- Empty boxes for previous month days -->
        <div v-for="n in lastDayOfMonth" :key="n" class="h-32 bg-black/50"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
//   import { fetchEventsForMonth } from '@/services/calendarService' // Fetching events from a generic source

// Calendar state
const currentMonth = ref(new Date().getMonth()); // 0-indexed (January is 0)
const currentYear = ref(new Date().getFullYear());
//   const events = ref<any[]>([])
const props = defineProps<{
  events: any;
}>();

// Days of the week for the header
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Get the number of days in the current month
const daysInMonth = ref<number>(new Date(currentYear.value, currentMonth.value + 1, 0).getDate());

// Calculate the first day of the month (0 = Sunday, 1 = Monday, etc.)
const firstDayOfMonth = ref<number>(new Date(currentYear.value, currentMonth.value, 1).getDay());
const lastDayOfMonth = ref<number>(
  6 - new Date(currentYear.value, currentMonth.value + 1, 0).getDay()
);

// Get the month name (e.g., January, February)
const currentMonthName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString('default', {
    month: 'long',
  });
});

// Move to the next month
const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value += 1;
  } else {
    currentMonth.value += 1;
  }
  updateCalendar();
};

// Move to the previous month
const previousMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value -= 1;
  } else {
    currentMonth.value -= 1;
  }
  updateCalendar();
};

// Update the calendar when navigating between months
const updateCalendar = async () => {
  daysInMonth.value = new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
  firstDayOfMonth.value = new Date(currentYear.value, currentMonth.value, 1).getDay();
  lastDayOfMonth.value = 6 - new Date(currentYear.value, currentMonth.value + 1, 0).getDay();

  const start = new Date(currentYear.value, currentMonth.value, 1);
  const end = new Date(currentYear.value, currentMonth.value + 1, 0);

  // Fetch events for the new month from the data service
  // events.value = await fetchEventsForMonth(start, end)
};

// Check if events exist for a specific day
const getEventsForDay = (day: number) => {
  const dateString = new Date(currentYear.value, currentMonth.value, day)
    .toISOString()
    .split('T')[0];
  // return events.value.filter(event => event.start.dateTime?.startsWith(dateString) || event.start.date?.startsWith(dateString))
  return props.events?.filter(
    (event: any) =>
      event.start.dateTime?.startsWith(dateString) || event.start.date?.startsWith(dateString)
  );
};

// Initialize the calendar on mount
onMounted(() => {
  updateCalendar();
});
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
