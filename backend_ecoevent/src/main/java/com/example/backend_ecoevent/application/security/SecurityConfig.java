package com.example.backend_ecoevent.application.security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.backend_ecoevent.application.security.filter.JwtFilterRequest;
import com.example.backend_ecoevent.domain.services.UserServiceImpl;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserServiceImpl userDetailsService;
    private final JwtFilterRequest jwtFilterRequest;

    public SecurityConfig(UserServiceImpl userDetailsServiceImpl, JwtFilterRequest jwtFilterRequest) {
        this.userDetailsService = userDetailsServiceImpl;
        this.jwtFilterRequest = jwtFilterRequest;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(this.userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // Todas las peticiones que terminan en /authenticate se deben permitir sin
        // authentificar
        http.csrf().disable().authorizeRequests().antMatchers("/**/authenticate", "/**/usuario/register").permitAll()
                .anyRequest().authenticated().and()
                // Sin session -> STATELESS -> se maneja con tokens
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        // tipo de filtro usuario y contraseña
        http.addFilterBefore(jwtFilterRequest, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}