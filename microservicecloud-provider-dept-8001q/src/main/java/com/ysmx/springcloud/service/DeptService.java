package com.ysmx.springcloud.service;

import java.util.List;

import com.ysmx.springcloud.entity.Dept;

public interface DeptService {
	public Boolean add(Dept dept);

	public Dept get(Long id);

	public List<Dept> list();
}
