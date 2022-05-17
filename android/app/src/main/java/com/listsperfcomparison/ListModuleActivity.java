package com.listsperfcomparison;

import android.app.LauncherActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;


public class ListModuleActivity extends AppCompatActivity {

    private static final String TAG = "test123";
    List<Item> data = new ArrayList<>();

    private RecyclerView recyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager layoutManager;

        @Override
        public void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);

            fillListWithItems();

            Log.d(TAG, "onCreate: " + data.toString());

            setContentView(R.layout.recycler_layout);

            recyclerView = findViewById(R.id.my_list);
            recyclerView.setHasFixedSize(true);

            layoutManager = new LinearLayoutManager(this);

            recyclerView.setLayoutManager(layoutManager);

            mAdapter = new RecycleViewAdapter(data, this);
            recyclerView.setAdapter(mAdapter);

        }

    private void fillListWithItems() {
        for (int i = 1; i <= 10000; i++) {
            data.add(new Item(i, "Title " + i, "Name " + i, ""));
        }
    }
}