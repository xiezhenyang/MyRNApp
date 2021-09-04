import { NativeModules } from 'react-native'

const ImagePickerModule = NativeModules.ImagePickerModule;

class PickImage {

  pickImage() {
    return ImagePickerModule.pickImage();
  }

}

const myPick = new PickImage();

export default myPick;