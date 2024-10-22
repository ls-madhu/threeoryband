<template>
  <div class="w-full mx-auto h-[calc(100vh-64px)] sm:h-auto" v-if="events?.length > 0">
    <div class="bg-black shadow-lg h-full overflow-y-hidden relative overflow-x-scroll">
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
      <div class="grid grid-cols-7 h-full gap-[1px] bg-gray-800">
        <!-- Days of the Week -->
        <div
          v-for="day in daysOfWeek"
          :key="day"
          class="bg-black text-[11px] xs:text-xs font-semibold uppercase text-white px-2 py-4 text-center">
          {{ day }}
        </div>

        <!-- Empty boxes for previous month days -->
        <div v-for="n in firstDayOfMonth" :key="n" class="h-auto sm:h-32 bg-black/50"></div>

        <!-- Days of the current month -->
        <DialogRoot v-for="day in daysInMonth" :key="day">
          <DialogTrigger class="h-auto sm:h-32 bg-black p-3">
            <div class="font-bold text-white h-4 mb-2">{{ day }}</div>
            <!-- Display events for the day -->
            <div class="h-20 text-left overflow-y-scroll">
              <div
                v-for="event in getEventsForDay(day)"
                :key="event.id"
                class="bg-primary text-xs font-medium xs:px-3 xs:py-2 px-1.5 py-1 mt-1 rounded-md">
                <div class="hidden xs:block">
                  {{ (event.start.dateTime as Date).toLocaleString().slice(11, 16) }}
                </div>
                <div
                  class="text-[10px] xs:text-xs xs:capitalize whitespace-nowrap uppercase overflow-x-clip text-ellipsis">
                  {{ event.summary }}
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay
              class="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
            <DialogContent
              class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-full max-w-screen-sm translate-x-[-50%] translate-y-[-50%] focus:outline-none z-[100] p-6">
              <div class="relative rounded-md bg-slate-900 p-6">
                <div v-for="(event, index) in getEventsForDay(day)" :key="event.id">
                  <div class="py-4" :class="index != 0 ? 'border-t border-white/15' : ''">
                    <div class="text-sm text-primary mb-2 uppercase font-medium">
                      {{ event.summary }}
                    </div>
                    <div class="text-xs mb-2 font-medium">
                      {{ (event.start.dateTime as Date).toLocaleString().slice(11, 16) }} -
                      {{ (event.end.dateTime as Date).toLocaleString().slice(11, 16) }}
                    </div>
                    <div class="text-[11px] text-gray-400 font-medium">{{ event.location }}</div>
                  </div>
                </div>
                <DialogClose
                  class="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
                  aria-label="Close">
                  <Icon name="radix-icons:cross-2" />
                </DialogClose>
              </div>
            </DialogContent>
          </DialogPortal>
        </DialogRoot>

        <!-- Empty boxes for previous month days -->
        <div v-for="n in lastDayOfMonth" :key="n" class="h-auto sm:h-32 bg-black/50"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue';
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
