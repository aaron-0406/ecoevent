package com.example.backend_ecoevent.application.security.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.backend_ecoevent.application.security.JWTUtil;
import com.example.backend_ecoevent.domain.services.UserServiceImpl;

@Component
public class JwtFilterRequest extends OncePerRequestFilter {
    private final JWTUtil jwtUtil;
    private final UserServiceImpl userService;

    public JwtFilterRequest(JWTUtil jwtUtil, UserServiceImpl userService) {
        this.jwtUtil = jwtUtil;
        this.userService = userService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // Verificar si lo que viene en el encabezado de la petición es un token y
        // verificar token
        String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer")) {
            String jwt = authorizationHeader.substring(7);
            // Verificar el usuario
            String username = jwtUtil.extractUsername(jwt);

            // Verificar si el usuario esta debidamente logeado
            // Verificar que aun no exista alguna autentificación para el usuario
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                // TODO: Implementar funcion
            }
        }

        filterChain.doFilter(request, response);
    }
}