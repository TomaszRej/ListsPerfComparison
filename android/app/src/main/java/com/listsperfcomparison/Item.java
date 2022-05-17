package com.listsperfcomparison;

public class Item {
    private int id;
    private String title;
    private String name;
    private String image;

    public Item(int id, String title, String name, String image) {
        this.id = id;
        this.title = title;
        this.name = name;
        this.image = image;
    }

    @Override
    public String toString() {
        return "ListItem{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", name='" + name + '\'' +
                ", image='" + image + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
