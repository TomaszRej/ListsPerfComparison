package com.listsperfcomparison;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import android.content.Intent;
import android.util.Log;

public class ListModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactApplicationContext;

    ListModule(ReactApplicationContext context) {
        super(context);
        reactApplicationContext = context;
    }

    @Override
    public String getName() {
        return "ListModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }

    @ReactMethod
    public void showView(Promise promise) {
        Intent intent = new Intent(reactApplicationContext, ListModuleActivity.class);

        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactApplicationContext.startActivity(intent);
        promise.resolve(true);
    }
}
