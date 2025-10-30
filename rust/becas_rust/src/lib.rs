use wasm_bindgen::prelude::*;

// Calcula el monto neto de la beca después de la comisión
#[wasm_bindgen]
pub fn calcular_beca_neta(monto: f64, comision: f64) -> f64 {
    monto * (1.0 - comision / 100.0)
}

// Valida que el monto de la beca sea mayor que cero
#[wasm_bindgen]
pub fn validar_monto_beca(monto: f64) -> bool {
    monto > 0.0
}

// Genera un mensaje de saludo para el estudiante
#[wasm_bindgen]
pub fn saludo_estudiante(nombre: &str, carrera: &str) -> String {
    format!("Hola, {}! Tu beca para {} está siendo procesada.", nombre, carrera)
}