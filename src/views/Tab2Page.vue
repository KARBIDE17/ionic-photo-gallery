<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col
            size="6"
            :key="photo.filepath"
            v-for="photo in photos"
          >
            <!-- Column that takes up 6 grid units and iterates over the photos array -->
            <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <!-- Floating action button (FAB) positioned at the bottom center of the page -->
        <ion-fab-button @click="takePhoto()">
          <!-- Button that triggers the takePhoto function when clicked -->
          <ion-icon :icon="camera"></ion-icon>
          <!-- Camera icon displayed on the FAB -->
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
// Import Ionic components used in the template
import {
  actionSheetController,
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/vue';
// other imports

// Import Ionicons for use in the floating action button
import { camera, trash, close } from "ionicons/icons";

// Import the composable function and types from the photo gallery logic
import { usePhotoGallery, UserPhoto } from "@/composables/usePhotoGallery";

// Destructure the photos array and takePhoto function from the composable
const { photos, takePhoto, deletePhoto } = usePhotoGallery();

const showActionSheet = async (photo: UserPhoto) => {
  const actionSheet = await actionSheetController.create({
    header: 'Photos',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        icon: trash,
        handler: () => {
          deletePhoto(photo);
        },
      },
      {
        text: 'Cancel',
        icon: close,
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        },
      },
    ],
  });
  await actionSheet.present();
};
</script>