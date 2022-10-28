package com.unigrid.backend.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.unigrid.backend.util.Role;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tbl_user")
@Setter
@Getter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String lastName;

    @Column
    private Date dateOfBirth;

    @Column
    private String email;

    @ManyToOne
    @JoinColumn(name = "university_id", nullable = false)
    private University university;

    @Column
    @Enumerated(EnumType.STRING)
    private Role role;
}
