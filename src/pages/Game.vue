<script setup>
import { ref, computed } from "vue";

const sizeX = ref(0);
const sizeY = ref(0);

const squareListX = ref([]);
const squareListY = ref([]);

const draw = () => {
  if (sizeX.value) {
    squareListX.value = [];
    for (let i = 0; i < sizeX.value; i++) {
      squareListX.value.push({
        id: i + 1,
        name: "X",
        isClicked: false,
      });
    }
  }

  if (sizeY.value) {
    squareListY.value = [];
    for (let i = 0; i < sizeY.value; i++) {
      squareListY.value.push({
        id: i + 1,
        name: "Y",
        isClicked: false,
      });
    }
  }
};

const changeColor = (item) => {
  if (item.name === "X") {
    const finded = squareListX.value.find((el) => el.id === item.id);
    finded.isClicked = !finded.isClicked;
  }

  if (item.name === "Y") {
    const finded = squareListY.value.find((el) => el.id === item.id);
    finded.isClicked = !finded.isClicked;
  }
};

const listX = computed(() => {
  return squareListX.value;
});

const listY = computed(() => {
  return squareListY.value;
});
</script>

<template>
  <div class="content">
    <v-card class="mx-auto" width="600">
      <v-card-title>Game Form</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Size X" v-model="sizeX"></v-text-field>
          <v-text-field label="Size Y" v-model="sizeY"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="draw">Draw</v-btn>
      </v-card-actions>
    </v-card>

    <div class="content-list">
      <ul class="content-list__horizontally">
        <li
          class="content-list__dot"
          :style="{ background: item.isClicked ? 'blue' : 'white' }"
          @click="changeColor(item)"
          v-for="(item, index) in listX"
          :key="index"
        ></li>
      </ul>

      <ul class="content-list__vertically">
        <li
          class="content-list__dot"
          :style="{ background: item.isClicked ? 'blue' : 'white' }"
          @click="changeColor(item)"
          v-for="(item, index) in listY"
          :key="index"
        ></li>
      </ul>
    </div>
  </div>
</template>

<style>
.content-list {
  padding: 0 16px;
}

.content-list__horizontally {
  display: flex;
  gap: 8px;
  list-style: none;
  margin-bottom: 32px;
}

.content-list__vertically {
  list-style: none;
}

.content-list__vertically li:not(:last-child) {
  margin-bottom: 8px;
}
.content-list__dot {
  cursor: pointer;
  width: 36px;
  height: 36px;
}
</style>
