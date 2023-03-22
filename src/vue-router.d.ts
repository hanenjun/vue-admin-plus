import { _RouteRecordBase } from 'vue-router';
import { Routermenu } from "@/store/router";
declare module 'vue-router'{
    interface _RouteRecordBase{
        meta: Routermenu
    }
}