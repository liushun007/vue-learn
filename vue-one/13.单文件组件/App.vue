<template>
    <div>
        <MySchool></MySchool>
        <MyStudent></MyStudent>
    </div>
</template>

<script>
import School from "./School.vue";
import Student from "./Student.vue";
export default {
    name:'App',
    component:{
        School,
        Student
    }
    
}
</script>
