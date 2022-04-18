# useEventListener

useEventListener is a custom react hook to add and remove event listeners from the dom. First input is the listener, the second is a callback function to run when the the listener is triggered, the third is optional

### **To install**

```bash
npm i "@sjblurton/use-event-listener"

yarn add "@sjblurton/use-event-listener"
```

### **To import the hook**

```bash
import useEventListener from "@sjblurton/use-event-listener";
```

### **To call the hook...**

```bash
  useEventListener("keydown", (e: KeyboardEvent) => {
    function(e.key);
  }, HTMLElement);
```

### **Links**

GitHub: https://github.com/sjblurton/use-event-listener
<br/>
NPM: https://www.npmjs.com/package/@sjblurton/use-event-listener
